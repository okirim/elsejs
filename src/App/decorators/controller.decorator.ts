import 'reflect-metadata';
import { Router } from './../singeltons/router.singelton';
import { HttpMethods } from './enums/enum.httpMethods';
import { metadata } from './enums/enum.metadata';
import { requiredData } from './validator.decorator';


export function controller(prefix: string) {
    return function (target: Function) {
        for (let key in target.prototype) {
            const MethodInController = target.prototype[key]
            const path = Reflect.getMetadata(metadata.path, target.prototype, key);
            const method: HttpMethods = Reflect.getMetadata(metadata.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(metadata.middleware, target.prototype, key) ?? [];
            const catchError = Reflect.getMetadata(metadata.catchError, target.prototype, key)
            const cacheClear = Reflect.getMetadata(metadata.cache, target.prototype, key)
            const dataFromReq = Reflect.getMetadata(metadata.validator, target.prototype, key) ?? [];
            const validator = requiredData(dataFromReq);
            if (path) {
                Router.instance?.[method](`${prefix}${path}`, ...middlewares, validator,cacheClear,MethodInController, catchError);
            }

        }
    }
}