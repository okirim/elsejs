"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchAsyncError = void 0;
exports.CatchAsyncError = function (fn) { return function (req, res, next) { return fn(req, res, next).catch(next); }; };
