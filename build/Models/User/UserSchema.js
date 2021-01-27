"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var validator_1 = __importDefault(require("validator"));
var mongoose_singelton_1 = require("../../App/singeltons/mongoose.singelton");
exports.UserSchema = new mongoose_singelton_1.Mongoose.instance.Schema({
    name: {
        type: String,
        required: [true, "name field is required"],
        minlength: [6, "minimum length is 8"],
        maxlength: [50, "max length is 50"],
    },
    email: {
        type: String,
        lowercase: true,
        validate: {
            validator: function (val) {
                return validator_1.default.isEmail(val);
            },
            message: "invalid email",
        },
        unique: true,
    },
    photo: String,
    password: {
        type: String,
        required: [true, "password  field is required"],
        select: false,
        minlength: [8, "minimum length is 8"],
        maxlength: [50, "max length is 50"],
    },
    confirmPassword: {
        type: String,
        required: [true, "password confirm field is required"],
        validator: function (val) {
            return val === this.password;
        },
    },
    passwordChangedAt: Date,
});
