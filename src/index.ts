import express, { Request, Response } from 'express';
import bodyParser from 'body-parser'

import cookieSession from 'cookie-session'
import './controller/login.controller';
import { Router } from './router/router.singelton';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['setRandomKeyString'] }))


// app.get('/', (req: Request, res: Response) => {
//     if (req.session?.loggedIn) {
//         res.send(`
//         <h1>${req.session?.name}</h1>
//         <a href="/logout">logout</a>
//         `)
//     }
//     else {
//         res.send(`
//         <a href="/login">login</a>
//         `)
//     }
// })
// app.get('/hello', (req: Request, res: Response) => {
//     res.send(`<h1>hello</h1>`)
// })

//app.use(LoginController);
app.use(Router.instance);
app.listen(3000);