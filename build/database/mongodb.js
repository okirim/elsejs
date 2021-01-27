"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DB_MONGOOSE_URL = process.env.DB_LOCAL;
if (process.env.NODE_ENV = 'production') {
    DB_MONGOOSE_URL = process.env.DB_MONGOOSE_URL;
}
if (DB_MONGOOSE_URL) {
    mongoose_1.default.connect(DB_MONGOOSE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(function (res) { return console.log('DB connected'); })
        .catch(function (err) { return console.log('DB connection error :' + err); });
}
