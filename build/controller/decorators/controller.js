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
var router_singelton_1 = require("../../router/router.singelton");
var enum_metadata_1 = require("./enum.metadata");
function controller(prefix) {
    return function (target) {
        var _a, _b;
        for (var key in target.prototype) {
            var MethodInController = target.prototype[key];
            var path = Reflect.getMetadata(enum_metadata_1.metadata.path, target.prototype, key);
            var method = Reflect.getMetadata(enum_metadata_1.metadata.method, target.prototype, key);
            var middlewares = (_a = Reflect.getMetadata(enum_metadata_1.metadata.middleware, target.prototype, key)) !== null && _a !== void 0 ? _a : [];
            if (path) {
                (_b = router_singelton_1.Router.instance) === null || _b === void 0 ? void 0 : _b[method].apply(_b, __spreadArrays(["" + prefix + path], middlewares, [MethodInController]));
            }
        }
    };
}
exports.controller = controller;
