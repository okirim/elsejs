"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchUnhandledErros = exports.UncaughtException = void 0;
exports.UncaughtException = function () {
    process.on("uncaughtException", function (err) {
        console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
        console.log(err.name, err.message);
        process.exit(1);
    });
};
exports.catchUnhandledErros = function (server) {
    //like database connection error //non gerer
    process.on("unhandledRejection", function (err) {
        console.log("UNHANDLED REJECTION! 💥 Shutting down...");
        //console.log(err.name, err.message);
        server.close(function () {
            process.exit(1);
        });
    });
};
