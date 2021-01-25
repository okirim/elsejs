import express from 'express';
import bodyParser from 'body-parser'

import cookieSession from 'cookie-session'
import './Http/controllers';
import { Router } from './singeltons/router.singelton';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['setRandomKeyString'] }))


app.use(Router.instance);
app.listen(3000);