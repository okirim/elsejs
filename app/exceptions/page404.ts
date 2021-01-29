import { App } from "../build/singeltons/app.singelton";
import { AppError } from "./AppError";
import { Response, NextFunction, Request } from 'express';

export const page404 = () => {
    App.instance.all('*', (req:Request, res:Response, next:NextFunction) => { //404 page not found

        next(new AppError(
            `Can't find ${req.originalUrl} on this server!`,
            404
        ));
    });
}