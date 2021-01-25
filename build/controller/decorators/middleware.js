"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
require("reflect-metadata");
function middleware(middlewareName) {
    return function (target, key, descriptor) {
        var _a;
        var middlewaresList = (_a = Reflect.getMetadata(middlewareName, target, key)) !== null && _a !== void 0 ? _a : [];
        middlewaresList.push(middlewareName);
        Reflect.defineMetadata(middlewareName, middlewaresList, target, key);
    };
}
exports.middleware = middleware;
