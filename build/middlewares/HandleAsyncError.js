"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchError = void 0;
exports.CatchError = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};
