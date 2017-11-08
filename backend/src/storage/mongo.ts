import * as mongoose from 'mongoose';
import {config} from '../config';
import {populateDB} from './populate';

export default class Mongo {

    static db: mongoose.Connection;
    private constructor(){}

    /**
     * populate mongo db with some mock data
     */
    static populateDB(){
        populateDB(Mongo.db);
    }

    /**
     * @returns an instance of mongoose.Connection
     */
    static connect() :mongoose.Connection {
        mongoose.connect(config.mongo.uri, { useMongoClient: true });
        Mongo.db = mongoose.connection;
        Mongo.db.on('error', console.error.bind(console, 'connection error'));
        Mongo.db.once('open', console.log.bind(console, 'connected correctly to mongo db'));
        return Mongo.db;
    }
}