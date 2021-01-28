import { User } from "../../models/User/User";

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
  catchError
} from "../BaseController";
import jwt from 'jsonwebtoken'

function getToken(id) {
  return jwt.sign({ user_id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
@controller("/users")
export class LoginController {

  @GET("/login")
  @catchError()
 
  async login(req: RequestController, res: Response, next: NextFunction) {
   
    res.send(`
    <h1>kadiro</h1>
    `)
//next(new AppError('hello errora', 600))
  }
   
}