"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
require("reflect-metadata");
var enum_metadata_1 = require("./enum.metadata");
function middleware(middlewareName) {
    return function (target, key, descriptor) {
        var _a;
        var middlewaresList = (_a = Reflect.getMetadata(enum_metadata_1.metadata.middleware, target, key)) !== null && _a !== void 0 ? _a : [];
        middlewaresList.push(middlewareName);
        Reflect.defineMetadata(enum_metadata_1.metadata.middleware, middlewaresList, target, key);
    };
}
exports.middleware = middleware;
