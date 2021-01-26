import { prop, Typegoose, pre } from "Typegoose";
import validator from "validator";
import bcrypt from 'bcrypt';


/**
 * !it should be on the top of the class
 * crypting the password
 */
@pre<UserModel>("save", async function (next) {
    if (!this.isModified("password")) return next(); //password was not updated
    this.password = await bcrypt.hash(this.password, 10);
    // Delete confirmPassword field

    this.confirmPassword = undefined;
    next();
})
    
    
class UserModel extends Typegoose {
  @prop({
    required: [true, "name field is required"],
    minlength: [6, "minimum length is 8"],
    maxlength: [50, "max length is 50"],
  })
  name!: string;
  @prop({
    lowercase: true,
    validate: {
      validator(val) {
        return validator.isEmail(val);
      },
      message: "invalid email",
    },
  })
  email!: string;
  @prop()
  photo?: String;
  @prop({
    required: [true, "password  field is required"],
    select: false,
    minlength: [8, "minimum length is 8"],
    maxlength: [50, "max length is 50"],
  })
  password!: string;
  @prop({
    required: [true, "password confirm field is required"],
    validate: {
        validator: (val) => val == UserModel.prototype.password,
        message: 'password and confirm password field is not the  same'
    }
  })
  confirmPassword!: string | undefined;
  @prop()
    passwordChangedAt?: Date;
    
  /**
   * @param givenPassword 
   * @param correctPassword 
   * 
   */
   public checkPassword=async(givenPassword:string,correctPassword:string): Promise<boolean>=>{
    return await bcrypt.compare(givenPassword, correctPassword);
    }

    /**
     * 
     * @param JWTTimestamp 
     */
    public passwordUpdated = (JWTTimestamp: number): boolean => {
         
        if (this.passwordChangedAt) {
            let updatedAt:number = (this.passwordChangedAt.getTime()/1000)

            return JWTTimestamp < updatedAt;
        }

        return false;
    }
}



export const User = new UserModel().getModelForClass(UserModel, {
  schemaOptions: {
    timestamps: true,
  },
});
