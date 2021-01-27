import { User } from "../../Models/User/User";

import {
  RequestController,
  Response,
  Request,
  NextFunction,
  controller,
  GET,
  middleware,
  POST,
  required,
} from "../BaseController";
import jwt from 'jsonwebtoken'

import { AppError } from "../../utils/AppError";
import { catchError } from "../../App/decorators/catch";


function getToken(id) {
  return jwt.sign({ user_id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
@controller("/users")
export class LoginController {

  @POST("/login")
  @catchError()
  async login(req: RequestController, res: Response, next: NextFunction) {
   
    res.send(`
    kadiro
    `)
    next(new AppError('hello errora', 600))
  }
   
}