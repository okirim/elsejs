"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("@typegoose/typegoose");
var validator_1 = __importDefault(require("validator"));
var bcrypt_1 = __importDefault(require("bcrypt"));
/**
 *
 * crypting the password before saving
 */
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @param givenPassword
         * @param correctPassword
         *
         */
        _this.checkPassword = function (givenPassword, correctPassword) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt_1.default.compare(givenPassword, correctPassword)];
                    case 1: 
                    //bcrypt function return Promise
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * check if the password was updated when the user is connected
         * @param JWTTimestamp
         */
        _this.passwordUpdated = function (JWTTimestamp) {
            if (_this.passwordChangedAt) {
                var updatedAt = _this.passwordChangedAt.getTime() / 1000;
                return JWTTimestamp < updatedAt;
            }
            return false;
        };
        return _this;
    }
    UserModel_1 = UserModel;
    var UserModel_1;
    __decorate([
        typegoose_1.prop({
            required: [true, "name field is required"],
            minlength: [8, "minimum length is 8"],
            maxlength: [50, "max length is 50"],
        }),
        __metadata("design:type", String)
    ], UserModel.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop({
            lowercase: true,
            validate: {
                validator: function (val) {
                    return validator_1.default.isEmail(val);
                },
                message: "invalid email",
            },
        }),
        __metadata("design:type", String)
    ], UserModel.prototype, "email", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], UserModel.prototype, "photo", void 0);
    __decorate([
        typegoose_1.prop({
            required: [true, "password field is required"],
            select: false,
            minlength: [8, "minimum length is 8"],
            maxlength: [50, "max length is 50"],
        }),
        __metadata("design:type", String)
    ], UserModel.prototype, "password", void 0);
    __decorate([
        typegoose_1.prop({
            required: [true, "password confirm field is required"],
            validate: {
                validator: function (val) { return val == UserModel_1.prototype.password; },
                message: 'password and confirm password field is not the same'
            }
        }),
        __metadata("design:type", Object)
    ], UserModel.prototype, "confirmPassword", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Date)
    ], UserModel.prototype, "passwordChangedAt", void 0);
    UserModel = UserModel_1 = __decorate([
        typegoose_1.pre("save", function (next) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            //check if password was not updated
                            if (!this.isModified("password"))
                                return [2 /*return*/, next()];
                            //hashing password
                            _a = this;
                            return [4 /*yield*/, bcrypt_1.default.hash(this.password, 10)];
                        case 1:
                            //hashing password
                            _a.password = _b.sent();
                            // Delete confirmPassword field
                            this.confirmPassword = undefined;
                            next();
                            return [2 /*return*/];
                    }
                });
            });
        })
        // @post<UserModel>('save', (doc, next: HookNextFunction) => {
        //   console.log('post save : doc= ', doc)
        //   console.log('post save : next= ', next)
        //   next()
        // })
        //QUERY MIDDLEWARE
        ,
        typegoose_1.pre(/^find/, function (next) {
            // console.log(this.pipeline());
            next();
        }).bind(this)
    ], UserModel);
    return UserModel;
}(typegoose_1.mongoose.Schema));
var User = typegoose_1.getModelForClass(UserModel);
