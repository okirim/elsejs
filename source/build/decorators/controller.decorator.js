"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var router_singelton_1 = require("./../singeltons/router.singelton");
var enum_metadata_1 = require("./enums/enum.metadata");
var validator_decorator_1 = require("./validator.decorator");
var cache_decorator_1 = require("./cache.decorator");
function controller(prefix) {
    return function (target) {
        var _a, _b, _c;
        for (var key in target.prototype) {
            var MethodInController = target.prototype[key];
            var path = Reflect.getMetadata(enum_metadata_1.metadata.path, target.prototype, key);
            var method = Reflect.getMetadata(enum_metadata_1.metadata.method, target.prototype, key);
            var middlewares = (_a = Reflect.getMetadata(enum_metadata_1.metadata.middleware, target.prototype, key)) !== null && _a !== void 0 ? _a : [];
            var catchError = Reflect.getMetadata(enum_metadata_1.metadata.catchError, target.prototype, key);
            var cacheKey = Reflect.getMetadata(enum_metadata_1.metadata.cache, target.prototype, key);
            var cacheClear = cache_decorator_1.removeCache(cacheKey);
            var dataFromReq = (_b = Reflect.getMetadata(enum_metadata_1.metadata.validator, target.prototype, key)) !== null && _b !== void 0 ? _b : [];
            var validator = validator_decorator_1.requiredData(dataFromReq);
            if (path) {
                (_c = router_singelton_1.Router.instance) === null || _c === void 0 ? void 0 : _c[method].apply(_c, __spreadArrays(["" + prefix + path, validator], middlewares, [cacheClear, MethodInController, catchError]));
            }
        }
    };
}
exports.controller = controller;
