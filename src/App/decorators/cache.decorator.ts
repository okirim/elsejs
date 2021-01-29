import 'reflect-metadata'
import { metadata } from './enums/enum.metadata'
import { Response, Request, NextFunction, RequestHandler } from 'express';
import { RequestController } from '../../http/BaseController';
import { clearHach } from '../../database/redis';


export function cacheClear(hkey:string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(metadata.cache, hkey, target, key);

    }
}

export function removeCache(hKey:string): RequestHandler {
   
         return async function(req: RequestController, res: Response, next: NextFunction){
             await next()
             console.log('chache hiii!')
            const hValue = req.body[hKey];
            if (hValue) {
                clearHach({ hKey: req.body[hValue] });
            }

        };
    
}