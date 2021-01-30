"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._use = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var app_singelton_1 = require("./build/singeltons/app.singelton");
var _use = function () {
    var _bodyParser = app_singelton_1.App.instance.use(body_parser_1.default.urlencoded({ extended: true }));
    var _cookie = app_singelton_1.App.instance.use(cookie_session_1.default({ keys: ['setRandomKeyString'] }));
    /**
     *
     *  _page404,
     *  _HandlingErrors
     */
    return {
        _bodyParser: _bodyParser,
        _cookie: _cookie,
    };
};
exports._use = _use;
