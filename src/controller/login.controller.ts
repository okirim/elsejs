import { Response, Request, NextFunction } from 'express'
import { CatchAsync } from '../middleware/handleAsyncError.middleware';
import { controller, GET, middleware, POST, validator } from './decorators';

interface ReqGuard extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void  {
    console.log('----------------1');
    next();

};
function requireAuth2(req: Request, res: Response, next: NextFunction): void {
    console.log('2-------');
    next();

};
@controller('')
    
export class LoginController {
    @GET('/login')
    @middleware(requireAuth2)
    @middleware(requireAuth)
   
    loginForm (req: Request, res: Response): void{
        res.send(`
    <form method="POST" action="/login">
    <label for="email">Email</label>
    <input type="text" name="email" id="email" />
    <label for="password">password</label>
    <input type="password" name="passworsd" id="password"/>
    <button>login</button>
    </form>
    `)
    };
    
    @POST('/login')
    @validator('email', 'password')    
     login(req: ReqGuard, res: Response): void  {
        const { email, password } = req.body;
        if (email === 'okirimkadiro@gmail.com' && password === 'poisson') {
            req.session = { loggedIn: true, name: 'okirim' };
            res.redirect('/');
        }
        else {
            res.send('Error invalid email or password')
        }
    }

     logout = ((req: Request, res: Response): void => {
        req.session = undefined;
        res.redirect('/')
    });
    
  

   


}
