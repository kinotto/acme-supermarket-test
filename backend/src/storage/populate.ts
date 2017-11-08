/**
 * script for initial db population
 */
import * as mongoose from 'mongoose';
import {Idea} from './model/idea';
const ideas = require('../config/ideas.json');

const clearCollection = (collection: mongoose.Model<any>, clb: any) => {
    collection.remove({}, clb);
}

export const populateDB = (db: mongoose.Connection) => {
    clearCollection(Idea, () => console.log.bind(console, 'Idea collection cleared'));
    Idea.create(ideas, (err, ideas) => {
        if(err) {
            return console.log(err);
        }
        console.log('db populated correctly');
    })
    
}

