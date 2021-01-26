"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./database/mongodb");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./Http/controllers");
var router_singelton_1 = require("./singeltons/router.singelton");
var app_singelton_1 = require("./singeltons/app.singelton");
app_singelton_1.App.instance.use(body_parser_1.default.urlencoded({ extended: true }));
app_singelton_1.App.instance.use(cookie_session_1.default({ keys: ['setRandomKeyString'] }));
app_singelton_1.App.instance.use(router_singelton_1.Router.instance);
app_singelton_1.App.instance.listen(3000);
