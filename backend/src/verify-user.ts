import * as express from 'express';

/**
 * Middleware to authenticate a user
 * @param req
 * @param res 
 * @param next 
 */

export const VerifyUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    //here there should be an authentication mechanism to authenticate each request before trigger the next
    //middleware, for this sample project i just call the next middleware in the chain without doing any
    //authentication

    return next();
}