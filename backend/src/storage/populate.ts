/**
 * script for initial db population
 */
import * as mongoose from 'mongoose';
import {Product} from './model/product';
const products = require('../config/products.json');

const clearCollection = (collection: mongoose.Model<any>, clb: any) => {
    collection.remove({}, clb);
}

export const populateDB = (db: mongoose.Connection) => {
    clearCollection(Product, () => console.log.bind(console, 'Idea collection cleared'));
    Product.create(products, (err, products) => {
        if(err) {
            return console.log(err);
        }
        console.log('db populated correctly');
    })
    
}

