
import express from 'express'

 export class App {
    private static AppInstance:any


     static get instance(): any {
        if (!App.AppInstance) {
            return App.AppInstance= express();
        }
         return App.AppInstance;
    }

} 