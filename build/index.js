"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./database/mongodb");
var body_parser_1 = __importDefault(require("body-parser"));
require("reflect-metadata");
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./Http/controllers");
var router_singelton_1 = require("./App/singeltons/router.singelton");
var app_singelton_1 = require("./App/singeltons/app.singelton");
var AppError_1 = require("./utils/AppError");
var HandlesErrors_1 = __importDefault(require("./utils/HandlesErrors"));
require("./server");
app_singelton_1.App.instance.use(body_parser_1.default.urlencoded({ extended: true }));
app_singelton_1.App.instance.use(cookie_session_1.default({ keys: ['setRandomKeyString'] }));
app_singelton_1.App.instance.use(router_singelton_1.Router.instance);
app_singelton_1.App.instance.all('*', function (req, res, next) {
    next(new AppError_1.AppError("Can't find " + req.originalUrl + " on this server!", 400));
});
app_singelton_1.App.instance.use(HandlesErrors_1.default);
