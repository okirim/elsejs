

import {
  RequestController,
  Response,
  NextFunction,
  controller,
  GET,
  middleware,
  POST,
  requiredInputs,
  AppError,
  cacheClear,
  catchError
} from "../BaseController";
import jwt from 'jsonwebtoken'


function getToken(id:string) {
  if (process.env.JWT_SECRET) {
    return jwt.sign({ user_id: id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }
}
@controller("/users")
export class LoginController {

  @GET("/login")
  @cacheClear('default')
  @catchError()
 
  async login(req: RequestController, res: Response, next: NextFunction) {
   
    res.send(`
    <h1>kadiro</h1>
    `)
    
//next(new AppError('hello errora', 600))
  }
   
}