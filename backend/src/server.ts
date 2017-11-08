import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import {config} from './config';
import {corsMiddleware} from './cors';
export default class Server {
    static instance: express.Express;

    private constructor(){}
    private static init(){
        Server.instance = express();
        Server.instance.use(corsMiddleware);
        Server.instance.use(morgan('dev'));
        Server.instance.use(bodyParser.json());
        Server.instance.use(bodyParser.urlencoded({extended: false}));
    }

    /**
     * @returns an instance of server
     */
    public static getInstance(){
        if(!Server.instance){
            Server.init();
        }
        return Server.instance;
    }
    public use(middleware: express.RequestHandler | express.ErrorRequestHandler){
        Server.instance.use(middleware);
    }
}
