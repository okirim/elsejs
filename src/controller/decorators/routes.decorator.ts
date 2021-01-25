import "reflect-metadata";
import { HttpMethods } from "./enums/enum.httpMethods";
import { metadata } from "./enums/enum.metadata";

function RouteMethod(method: string) {
    return function (path: string) {
        return function (target: any, key: string, descriptor: PropertyDescriptor) {
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

