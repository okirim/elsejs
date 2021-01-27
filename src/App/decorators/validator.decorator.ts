import 'reflect-metadata'
import { metadata } from './enums/enum.metadata'
import { Response, Request, NextFunction, RequestHandler } from 'express';


export function required(...inputsName:string[]) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(metadata.validator, inputsName, target, key);

    }
}

export function requiredData(inputs: string): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (let input of inputs) {
            if (!req.body[input]) {
                res.status(422).send(`missing property ${input}`);
                return;
            }
        }
        next()
    }
}