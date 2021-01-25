"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterSingelton = void 0;
var express_1 = __importDefault(require("express"));
var RouterSingelton = /** @class */ (function () {
    function RouterSingelton() {
    }
    Object.defineProperty(RouterSingelton, "instance", {
        get: function () {
            if (!RouterSingelton.routerInstance) {
                return RouterSingelton.routerInstance = express_1.default.Router();
            }
            return RouterSingelton.routerInstance;
        },
        enumerable: false,
        configurable: true
    });
    return RouterSingelton;
}());
exports.RouterSingelton = RouterSingelton;
