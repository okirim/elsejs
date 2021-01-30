"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlingErrors = void 0;
var AppError_1 = require("./AppError");
var HandlingErrors = function (err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV == "developement") {
        devErrorResponse(err, res);
    }
    else if (process.env.NODE_ENV == "production") {
        //others errors
        var error = __assign({}, err);
        // console.log(`---------------${err.name}--------------`)
        if (error.name === "CastError")
            error = handleCastErrorDB(error); //invalid ID
        if (error.code === 11000)
            error = handleDuplicateFieldsDB(error); //duplicate database field
        if (err.name === "ValidationError")
            error = handleValidationErrorDB(error); //validation error 
        if (err.name === 'TokenExpiredError')
            error = jwtExpiredToken();
        if (err.name === "JsonWebTokenError")
            error = jwtErrorToken();
        if (err.name === "NotBeforeError")
            error = jwtTokenInvalidBefore();
        prodErrorResponse(error, res);
    }
    ;
};
exports.HandlingErrors = HandlingErrors;
/*
  @devlopement env
*/
var devErrorResponse = function (err, res) {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
};
/*
  @production env
*/
var prodErrorResponse = function (err, res) {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            error: err,
        });
    }
    else {
        // 1) Log error
        console.error("ERROR 💥", err);
        // 2) Send generic message
        res.status(500).json({
            status: "error",
            message: "Something went very wrong!",
        });
    }
};
/*
  @invalid ID
*/
var handleCastErrorDB = function (err) {
    var message = "Invalid " + err.path + ": " + err.value + ".";
    return new AppError_1.AppError(message, 400);
};
/*
  @duplication field
*/
var handleDuplicateFieldsDB = function (err) {
    var value = Object.keys(err.keyValue);
    //  console.log(value);
    var message = value + " already exists. Please use another value!";
    return new AppError_1.AppError(message, 400);
};
/*
  @valiationd error
*/
var handleValidationErrorDB = function (err) {
    var errors = Object.values(err.errors).map(function (el) { return el.message; });
    var message = "Invalid input data. " + errors.join(". ");
    return new AppError_1.AppError(message, 400);
};
var jwtExpiredToken = function () {
    return new AppError_1.AppError('you should login, expired session', 401);
};
var jwtErrorToken = function () {
    return new AppError_1.AppError("invalid token", 401);
};
var jwtTokenInvalidBefore = function () {
    //return new AppError(`invalid token before ${err.date}`, 401);
    return new AppError_1.AppError("invalid token bedfore incoming date", 401);
};
