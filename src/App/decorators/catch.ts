import 'reflect-metadata';
import { RequestHandler } from 'express';
import { metadata } from './enums/enum.metadata';

export function catchError(middlewareCatchError: any = CatchError) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        Reflect.getMetadata(metadata.catchError, target, key);
        Reflect.defineMetadata(metadata.catchError, middlewareCatchError, target, key)
    }

}
 const CatchError = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }


};