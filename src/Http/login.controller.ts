import { Response, Request, NextFunction } from 'express'
import { CatchError } from '../middlewares/HandleAsyncError';
import { controller, GET, middleware, POST, required } from './decorators';

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
    <input type="password" name="password" id="password"/>
    <button>login</button>
    </form>
    `)
    };

   
    
    @POST('/login')
    @required('email', 'password')    
     login(req: ReqGuard, res: Response): void  {
        const { email, password } = req.body;
        if (email === 'okirimkadiro@gmail.com' && password === 'poisson') {
            req.session = { loggedIn: true, name: 'okirim' };
            res.redirect('/hello');
        }
        else {
            res.send('Error invalid email or password')
        }
    }

     logout = ((req: Request, res: Response): void => {
        req.session = undefined;
        res.redirect('/')
    });
    
  

   
    @GET('/hello')
    hello(req: ReqGuard, res: Response): void { 
        res.send(`
        <h1>hello !!</h1>
        `)
    }

}
