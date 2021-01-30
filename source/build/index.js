"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_singelton_1 = require("./singeltons/router.singelton");
var app_singelton_1 = require("./singeltons/app.singelton");
var exceptions_1 = require("../exceptions");
var use_1 = require("../use");
var _middlewares = function () {
    var _router = app_singelton_1.App.instance.use(router_singelton_1.Router.instance);
    var _page404 = exceptions_1.page404();
    var _HandlingErrors = app_singelton_1.App.instance.use(exceptions_1.HandlingErrors);
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
