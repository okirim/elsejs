// import { UserSchema } from './UserSchema';
// import { Mongoose } from "../../build/singeltons/mongoose.singelton";
// const bcrypt = require("bcrypt");

// UserSchema.methods.checkPassword = async function (
//   givenPassword:string, correctPassword:string
// ) {
//   return await bcrypt.compare(givenPassword, correctPassword);
// };

// UserSchema.methods.passwordUpdated = function (JWTTimestamp) { //model method
//   // console.log("=====" + this.passwordChangedAt);

//   if (this.passwordChangedAt) {
//     let updatedAt = this.passwordChangedAt.getTime() / 1000;

//     return JWTTimestamp < updatedAt;
//   }

//   return false;
// }.bind(this);
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified("password")) return next(); //password was not updated
//   this.password = await bcrypt.hash(this.password, 10);
//   // Delete confirmPassword field

//   this.confirmPassword = undefined;

//   next();
// }.bind(this));











// export const User = Mongoose.instance.model('User', UserSchema);
