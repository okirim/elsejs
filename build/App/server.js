"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_singelton_1 = require("./singeltons/app.singelton");
require(".");
var UnhandledErrors_1 = require("../exceptions/UnhandledErrors");
var mongoose_singelton_1 = require("./singeltons/mongoose.singelton");
var mongodb_1 = require("../database/mongodb");
var _App = function () {
    var _UncaughtException = UnhandledErrors_1.UncaughtException();
    var _dbConnection = mongodb_1.dbConnection(mongoose_singelton_1.Mongoose.instance);
    var port = process.env.PORT || 3000;
    var _server = app_singelton_1.App.instance.listen(port, function () {
        console.log("App running on port " + port + "...");
    });
    var _catchUnhadledErrors = UnhandledErrors_1.catchUnhandledErros(_server);
    return {
        _UncaughtException: _UncaughtException,
        _dbConnection: _dbConnection,
        _server: _server,
        _catchUnhadledErrors: _catchUnhadledErrors
    };
};
_App();
