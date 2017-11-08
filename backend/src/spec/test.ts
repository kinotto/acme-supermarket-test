import {expect} from 'chai';
import {} from "mocha";
import {Product} from '../storage/model/product';
import Mongo from '../storage/mongo';
import * as mongoose from 'mongoose';

describe('test on mock data', () => {

    beforeEach((done) => {
        let connection = Mongo.connect();
        connection.once('open', () => done());
    })

    it('should return some mock data', (done) => {
        Product.find({}, (err, resp) => {
            console.log(resp.length && resp[0]);
            if(err){
                done(err);
            }
            done();
        })
    })

    afterEach(() => {
        mongoose.disconnect();
    })
})