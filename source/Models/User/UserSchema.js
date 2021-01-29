"use strict";
// import validator from "validator";
// import { Mongoose } from "../../build/singeltons/mongoose.singelton";
// export const UserSchema = new Mongoose.instance.Schema({
//     name: {
//         type: String,
//         required: [true, "name field is required"],
//         minlength: [6, "minimum length is 8"],
//         maxlength: [50, "max length is 50"],
//     },
//     email: {
//         type: String,
//         lowercase: true,
//         validate: {
//             validator(val:string) {
//                 return validator.isEmail(val);
//             },
//             message: "invalid email",
//         },
//         unique: true,
//     },
//     photo: String,
//     password: {
//         type: String,
//         required: [true, "password  field is required"],
//         select: false,
//         minlength: [8, "minimum length is 8"],
//         maxlength: [50, "max length is 50"],
//     },
//     confirmPassword: {
//         type: String,
//         required: [true, "password confirm field is required"],
//         validator: function (val:string) {
//             return val === this.password;
//         },
//     },
//     passwordChangedAt: Date,
// });
