"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/login.controller");
var router_singelton_1 = require("./router/router.singelton");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['setRandomKeyString'] }));
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
app.use(router_singelton_1.Router.instance);
app.listen(3000);
