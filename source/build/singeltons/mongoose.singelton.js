"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongoose = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Mongoose = /** @class */ (function () {
    function Mongoose() {
    }
    Object.defineProperty(Mongoose, "instance", {
        get: function () {
            if (!Mongoose.Instance) {
                return Mongoose.Instance = new mongoose_1.default.Mongoose();
            }
            return Mongoose.Instance;
        },
        enumerable: false,
        configurable: true
    });
    return Mongoose;
}());
exports.Mongoose = Mongoose;
