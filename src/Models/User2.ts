


import { pre, post, getModelForClass, prop, DocumentType, mongoose } from '@typegoose/typegoose';

import validator from "validator";
import bcrypt from 'bcrypt';
import { HookNextFunction, Document } from "mongoose";


/**
 * 
 * crypting the password before saving
 */
@pre<UserModel>("save", async function (next: HookNextFunction) {
    //check if password was not updated
    if (!this.isModified("password")) return next();
    //hashing password
    this.password = await bcrypt.hash(this.password, 10);
    // Delete confirmPassword field
    this.confirmPassword = undefined;
    next();
})

// @post<UserModel>('save', (doc, next: HookNextFunction) => {
//   console.log('post save : doc= ', doc)
//   console.log('post save : next= ', next)
//   next()
// })
//QUERY MIDDLEWARE
@pre<UserModel>(/^find/, function (next: HookNextFunction) {


    // console.log(this.pipeline());
    next();

}).bind(this)

class UserModel extends mongoose.Schema {
    /**
     * name
     */
    @prop({
        required: [true, "name field is required"],
        minlength: [8, "minimum length is 8"],
        maxlength: [50, "max length is 50"],
    })
    public name!: string;
    /**
    * email
    */
    @prop({
        lowercase: true,
        validate: {
            validator(val) {
                return validator.isEmail(val);
            },
            message: "invalid email",
        },
    })
    public email!: string;
    /**
    * photo
    */
    @prop()
    public photo?: String;
    /**
    * password
    */
    @prop({
        required: [true, "password field is required"],
        select: false,
        minlength: [8, "minimum length is 8"],
        maxlength: [50, "max length is 50"],
    })
    public password!: string;
    /**
    * confirmPassword
    */
    @prop({
        required: [true, "password confirm field is required"],
        validate: {
            validator: (val) => val == UserModel.prototype.password,
            message: 'password and confirm password field is not the same'
        }
    })
    public confirmPassword!: string | undefined;
    /**
    * passwordChangedAt
    */
    @prop()
    public passwordChangedAt?: Date;

    /**
     * @param givenPassword 
     * @param correctPassword 
     * 
     */
    public checkPassword = async (givenPassword: string, correctPassword: string): Promise<boolean> => {
        //bcrypt function return Promise
        return await bcrypt.compare(givenPassword, correctPassword);
    }

    /**
     * check if the password was updated when the user is connected
     * @param JWTTimestamp 
     */
    public passwordUpdated = (JWTTimestamp: number): boolean => {

        if (this.passwordChangedAt) {
            let updatedAt: number = this.passwordChangedAt.getTime() / 1000;

            return JWTTimestamp < updatedAt;
        }

        return false;
    }
}



 const User = getModelForClass(UserModel);


