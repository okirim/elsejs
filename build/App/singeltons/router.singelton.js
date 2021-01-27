"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
var Router = /** @class */ (function () {
    function Router() {
    }
    Object.defineProperty(Router, "instance", {
        get: function () {
            if (!Router.routerInstance) {
                return Router.routerInstance = express_1.default.Router();
            }
            return Router.routerInstance;
        },
        enumerable: false,
        configurable: true
    });
    return Router;
}());
exports.Router = Router;
