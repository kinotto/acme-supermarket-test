import {expect} from 'chai';
import {} from "mocha";
import {Product} from '../storage/model/product';
import Mongo from '../storage/mongo';
import * as mongoose from 'mongoose';

describe('test on mock data', () => {

    //before all
    before((done) => {
        let connection = Mongo.connect();
        connection.once('open', () => done());
    })

    it('should return some mock data', (done) => {
        Product.find({}, (err, products) => {
            if(err){
                done(err);
            }
            if(!products.length){
                done(new Error('no data!'));
            }
            done();
        })
    })
    it('should return products with a productCode', (done) => {
        Product.find({}, (err, products) => {
            if(err){
                done(err);
            }
            if(!products.every((product:any) => product.productCode)){
                done(new Error('some products don\'t have a productCode'));
            }
            done();
        })
    })

    //after all
    after(() => {
        mongoose.disconnect();
    })
})