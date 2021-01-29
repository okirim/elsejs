"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PATCH = exports.PUT = exports.POST = exports.GET = void 0;
require("reflect-metadata");
var enum_httpMethods_1 = require("./enums/enum.httpMethods");
var enum_metadata_1 = require("./enums/enum.metadata");
function RouteMethod(method) {
    return function (path) {
        return function (target, key, descriptor) {
            Reflect.defineMetadata(enum_metadata_1.metadata.path, path, target, key);
            Reflect.defineMetadata(enum_metadata_1.metadata.method, method, target, key);
        };
    };
}
exports.GET = RouteMethod(enum_httpMethods_1.HttpMethods.GET);
exports.POST = RouteMethod(enum_httpMethods_1.HttpMethods.POST);
exports.PUT = RouteMethod(enum_httpMethods_1.HttpMethods.PUT);
exports.PATCH = RouteMethod(enum_httpMethods_1.HttpMethods.PATCH);
exports.DELETE = RouteMethod(enum_httpMethods_1.HttpMethods.DELETE);
