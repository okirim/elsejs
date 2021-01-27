
import express from 'express'

 export class App {
    private static AppInstance: express.Express


     static get instance(): express.Express {
        if (!App.AppInstance) {
            return App.AppInstance= express();
        }
         return App.AppInstance;
    }

} 