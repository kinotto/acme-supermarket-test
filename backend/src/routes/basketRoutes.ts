import * as express from 'express';
import {Product} from '../storage/model/product';
import {Basket} from '../storage/model/basket';
import * as mongoose from 'mongoose';
const router = express.Router();

/**
 * add an element to the basket
 */
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(!req.body.productCode){
        return next(new Error('no item provided'));
    }
    let item = req.body;

    //HERE i use mongoose with plain callbacks
    Product.findOne({productCode: item.productCode}, (err: mongoose.Error, prod_item: any) => {

        if(err){
            return next(err);
        }
        if(!prod_item){
            return next(new Error('item not found'));
        }
        item = {
            productCode: prod_item.productCode, 
            name: prod_item.name, 
            price: prod_item.price,
            quantity: item.quantity || 1
        }; 

        Basket.findOneAndUpdate(
            {productCode: item.productCode}, 
            item,
            { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true },
            (err: mongoose.Error, _item: any) => {
                if(err){
                    return next(err);
                }
                fetchAllBasket()
                .then(items => {
                    res.status(200).json(items);
                })
                .catch((err: mongoose.Error) => {
                    next(err);
                })
            }
        )
    })

})

/**
 * get the whole basket
 */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fetchAllBasket()
    .then(items => {
        res.status(200).json(items);
    })
    .catch((err: mongoose.Error) => {
        next(err);
    })
})


/**
 *  delete a single basket item or the whole basket
 */
router.delete('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(!req.body.productCode){
        return next(new Error('no item provided'));
    }

    //could be a single product or the whole cart
    let toRemove = req.body.productCode ? {productCode: req.body.productCode}: {}
    
    //mongoose with promises
    Basket.remove(toRemove)
    .then(resp => {
        return fetchAllBasket();
    })
    .then(items => {
        res.status(200).json(items);
    })
    .catch((err: mongoose.Error) => {
        next(err);
    })
})


const fetchAllBasket = () => {
    return new Promise((resolve: any, reject: any) => {
        //mongoose and Promises
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
            resolve(itemsAndQuantity);
        })
        .catch((err: mongoose.Error) => {
            reject(err);
        })
    })
        
}


module.exports = router;