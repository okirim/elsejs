"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_singelton_1 = require("./singeltons/app.singelton");
var UnhandledErrors_1 = require("../exceptions/UnhandledErrors");
var mongoose_singelton_1 = require("./singeltons/mongoose.singelton");
var mongodb_1 = require("../database/mongodb");
require("dotenv/config");
require("reflect-metadata");
require("../Http/controllers");
var helpers_1 = require("./helpers/helpers");
var _App = function () {
    var _UncaughtException = UnhandledErrors_1.UncaughtException();
    var _dbConnection = mongodb_1.dbConnection(mongoose_singelton_1.Mongoose.instance);
    var port = helpers_1._env('PORT');
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
