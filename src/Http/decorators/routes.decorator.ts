import "reflect-metadata";
import { HttpMethods } from "./enums/enum.httpMethods";
import { metadata } from "./enums/enum.metadata";
import { RequestHandler } from 'express';


interface CheckControllerFunction extends PropertyDescriptor{
value?:RequestHandler,
}

function RouteMethod(method: string) {
    return function (path: string) {
        return function (target: any, key: string, descriptor: CheckControllerFunction) {
            Reflect.defineMetadata(metadata.path, path, target, key);
            Reflect.defineMetadata(metadata.method, method, target, key);
        };
    };
}

export const GET = RouteMethod(HttpMethods.GET);
export const POST = RouteMethod(HttpMethods.POST);
export const PUT = RouteMethod(HttpMethods.PUT);
export const PATCH = RouteMethod(HttpMethods.PATCH);
export const DELETE = RouteMethod(HttpMethods.DELETE);

