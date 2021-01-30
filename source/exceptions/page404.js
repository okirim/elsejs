"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page404 = void 0;
var app_singelton_1 = require("../build/singeltons/app.singelton");
var AppError_1 = require("./AppError");
var page404 = function () {
    app_singelton_1.App.instance.all('*', function (req, res, next) {
        next(new AppError_1.AppError("Can't find " + req.originalUrl + " on this server!", 404));
    });
};
exports.page404 = page404;
