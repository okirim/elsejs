"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchAsync = void 0;
exports.CatchAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};
