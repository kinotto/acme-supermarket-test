import * as express from 'express';
import {Product} from '../storage/model/product';
import {Basket} from '../storage/model/basket';
import * as mongoose from 'mongoose';
const router = express.Router();

/**
 * add an element to the basket
 */
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(!req.body.item){
        return next(new Error('no item provided'));
    }
    let {item} = req.body;

    Product.findOne({productCode: item.productCode}, (err: mongoose.Error, prod_item: any) => {

        if(err){
            return next(err);
        }
        if(!prod_item){
            return next(new Error('item not found'));
        }
        item = {
            ...item, 
            name: prod_item.name, 
            price: prod_item.price
        }; 

        Basket.findOneAndUpdate(
            {productCode: item.productCode}, 
            item,
            { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true },
            (err: mongoose.Error, _item: any) => {
                if(err){
                    return next(err);
                }
                res.status(200).json(item);
            }
        )
    })

})

/**
 * get the whole basket
 */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    //a different approach based on Promises
    let basketItems: any;
    Basket.find({})
    .then((_basketItems: any) => {
        basketItems = _basketItems;
        let productCodes = basketItems.map((basket_item:any) => basket_item.productCode);
        return Product.find({ productCode: {
            $in: productCodes
        }})
    })
    .then((items: any) => {
        let itemsAndQuantity = items.map((item: any) => {
            let bItem = basketItems.find((bItem:any) => bItem.productCode === item.productCode);
            return {...item.toObject(), quantity: bItem.quantity || 1};
        })
        res.status(200).json(itemsAndQuantity);
    })
    .catch((err: mongoose.Error) => {
        next(err);
    })
})

/**
 *  delete a single basket item or the whole basket
 */
router.delete('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(!req.body.item){
        return next(new Error('no item provided'));
    }
    if(!req.body.item.productCode){
        return next(new Error('no productCode provided'));
    }
    
    //again mongoose with promises
    Basket.remove({productCode: req.body.item.productCode})
    .then((resp: any) => {
        res.status(200).json(resp);
    })
    .catch((err: mongoose.Error) => {
        next(err);
    })
})


module.exports = router;