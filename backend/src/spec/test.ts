import {expect} from 'chai';
import {} from "mocha";
import {Idea} from '../storage/model/idea';
import Mongo from '../storage/mongo';
import * as mongoose from 'mongoose';

describe('test on mock data', () => {

    beforeEach((done) => {
        let connection = Mongo.connect();
        connection.once('open', () => done());
    })

    it('should return some mock data', (done) => {
        Idea.find({}, (err, resp) => {
            console.log(resp.length && resp[0]);
            if(err){
                done(err);
            }
            done();
        })
        //expect(true).to.be.true;
    })

    afterEach(() => {
        mongoose.disconnect();
    })
})