import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { App } from './build/singeltons/app.singelton';
import express from 'express';
import { Router } from './build/singeltons/router.singelton';



export const _use = () => {
    App.instance.use(bodyParser.urlencoded({ extended: true }))
    App.instance.use(cookieSession({ keys: ['setRandomKeyString'] }))
    App.instance.use(express.json());
    App.instance.use(Router.instance);

}
