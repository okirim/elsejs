"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_singelton_1 = require("./App/singeltons/app.singelton");
process.on("uncaughtException", function (err) {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});
var server = app_singelton_1.App.instance.listen(process.env.PORT, function () {
    console.log('server is running on port ' + process.env.PORT);
});
//like database connection error //non gerer
process.on("unhandledRejection", function (err) {
    // console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    // console.log(err.name, err.message);
    server.close(function () {
        process.exit(1);
    });
});
