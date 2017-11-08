import * as express from 'express';
import {Product} from '../storage/model/product';
import * as mongoose from 'mongoose';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Product.find({}, (err: mongoose.Error, ideas: any) => {
        if(err){
            return next(err);
        }
        res.status(200).json(ideas);
    })
})


module.exports = router;