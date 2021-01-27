import "dotenv/config";
import './database/mongodb';
import bodyParser from 'body-parser'
import 'reflect-metadata';
import cookieSession from 'cookie-session'
import './Http/controllers';
import { Router } from './App/singeltons/router.singelton';
import { App } from './App/singeltons/app.singelton';
import { AppError } from "./utils/AppError";
import HandlesErrors from "./utils/HandlesErrors";
import './server';


App.instance.use(bodyParser.urlencoded({ extended: true }))
App.instance.use(cookieSession({ keys: ['setRandomKeyString'] }))


App.instance.use(Router.instance);

App.instance.all('*', (req, res, next) => { //404 page not found

    next(new AppError(
        `Can't find ${req.originalUrl} on this server!`,
        400
    ));
});
App.instance.use(HandlesErrors);
