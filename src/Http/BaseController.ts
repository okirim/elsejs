import { Response, Request, NextFunction } from 'express'

import { controller, GET, middleware, POST, requiredInputs,PUT,PATCH,DELETE } from '../App/decorators';
import { AppError } from "./../exceptions/AppError";
import { catchError } from "./../App/decorators/catchError";
//import { clearCache } from "./../App/decorators/cache";
export interface RequestController extends Request {
    body: { [key: string]: string | undefined }
}

export { Response, NextFunction, controller, GET, PUT, PATCH, DELETE, POST, middleware, requiredInputs, AppError, catchError };