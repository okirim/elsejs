"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
require("../Http/controllers");
var router_singelton_1 = require("./singeltons/router.singelton");
var app_singelton_1 = require("./singeltons/app.singelton");
var utils_1 = require("../utils");
var use_1 = require("../use");
var _middlewares = function () {
    var _router = app_singelton_1.App.instance.use(router_singelton_1.Router.instance);
    var _page404 = utils_1.page404();
    var _HandlingErrors = app_singelton_1.App.instance.use(utils_1.HandlingErrors);
    /**
     * respect the order
     *  _router,
     *  _page404,
     *  _HandlingErrors
     */
    return {
        _router: _router,
        _page404: _page404,
        _HandlingErrors: _HandlingErrors
    };
};
use_1._use();
_middlewares();
