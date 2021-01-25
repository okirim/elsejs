"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    console.log('----------------1');
    next();
}
;
function requireAuth2(req, res, next) {
    console.log('2-------');
    next();
}
;
var LoginController = /** @class */ (function () {
    function LoginController() {
        this.logout = (function (req, res) {
            req.session = undefined;
            res.redirect('/');
        });
    }
    LoginController.prototype.loginForm = function (req, res) {
        res.send("\n    <form method=\"POST\" action=\"/login\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" id=\"email\" />\n    <label for=\"password\">password</label>\n    <input type=\"password\" name=\"password\" id=\"password\"/>\n    <button>login</button>\n    </form>\n    ");
    };
    ;
    LoginController.prototype.login = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'okirimkadiro@gmail.com' && password === 'poisson') {
            req.session = { loggedIn: true, name: 'okirim' };
            res.redirect('/');
        }
        else {
            res.send('Error invalid email or password');
        }
    };
    __decorate([
        decorators_1.GET('/login'),
        decorators_1.middleware(requireAuth2),
        decorators_1.middleware(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "loginForm", null);
    __decorate([
        decorators_1.POST('/login'),
        decorators_1.required('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    LoginController = __decorate([
        decorators_1.controller('')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
