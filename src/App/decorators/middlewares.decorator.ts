import 'reflect-metadata';
import { RequestHandler } from 'express';
import { metadata } from './enums/enum.metadata';

export function middleware(middlewareName: RequestHandler) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const middlewaresList = Reflect.getMetadata(metadata.middleware, target, key) ?? [];
        middlewaresList.push(middlewareName);
        Reflect.defineMetadata(metadata.middleware,middlewaresList,target,key)
    }
    
}