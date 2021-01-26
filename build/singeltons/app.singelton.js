"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
    }
    Object.defineProperty(App, "instance", {
        get: function () {
            if (!App.AppInstance) {
                return App.AppInstance = express_1.default();
            }
            return App.AppInstance;
        },
        enumerable: false,
        configurable: true
    });
    return App;
}());
exports.App = App;
