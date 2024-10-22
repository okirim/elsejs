import { Response, Request, NextFunction } from 'express'

import { controller, GET, middleware, POST, requiredInputs,PUT,PATCH,DELETE } from '../build/decorators';
import { AppError } from "./../exceptions/AppError";
//import { catchError } from "../build/decorators/catchError.decorator";
//import { cacheClear } from '../build/decorators/cache.decorator';
export interface RequestController extends Request {
    body: { [key: string]: string | undefined }
}

export { Response, NextFunction, controller, GET, PUT, PATCH, DELETE, POST, middleware, requiredInputs, AppError };