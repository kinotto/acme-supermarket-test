import Server from './server';
import Mongo from './storage/mongo';
import {config} from './config';
import * as express from 'express';
import {VerifyUser} from './verify-user';

let server = Server.getInstance();
Mongo.connect();
Mongo.populateDB();

server.use('/api', VerifyUser, require('./routes/apiRoutes'));



//generic error handler
server.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
        message: err.message,
        error: 500
    })
}) 

server.listen(process.env.PORT || config.server.PORT, (req: express.Request, res: express.Response) => {
    console.log( `server listening on port  ${process.env.PORT || config.server.PORT}`);
})


//server.listen();

