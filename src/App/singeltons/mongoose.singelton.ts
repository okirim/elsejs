
import mongoose from 'mongoose'

 export class Mongoose {
     private static Instance: mongoose.Mongoose;
    

    static get instance(): any {
        if (!Mongoose.Instance) {
            return Mongoose.Instance =  new mongoose.Mongoose();
        }
        return Mongoose.Instance;
    }
     


} 