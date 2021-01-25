import { NextFunction, Request, Response } from 'express';

type asyncFunction = (req: Request, res: Response, next?: NextFunction) =>any

export const CatchError = (fn: asyncFunction) => {
    return (req: Request, res: Response, next?: NextFunction) => {
        fn(req, res, next).catch(next);
    }
}
