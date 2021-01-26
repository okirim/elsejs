import express from 'express';
import './database/mongodb';
import bodyParser from 'body-parser'
import 'reflect-metadata';
import cookieSession from 'cookie-session'
import './Http/controllers';
import { Router } from './singeltons/router.singelton';
import { App } from './singeltons/app.singelton';



App.instance.use(bodyParser.urlencoded({ extended: true }))
App.instance.use(cookieSession({ keys: ['setRandomKeyString'] }))


App.instance.use(Router.instance);
App.instance.listen(3000);