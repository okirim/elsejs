import { Response, Request, NextFunction } from 'express'

import { controller, GET, middleware, POST, requiredInputs,PUT,PATCH,DELETE } from '../App/decorators';
import { AppError } from "./../exceptions/AppError";
import { catchError } from "../App/decorators/catchError.decorator";
import { cacheClear } from '../App/decorators/cache.decorator';
export interface RequestController extends Request {
    body: { [key: string]: string | undefined }
}

export {cacheClear, Response, NextFunction, controller, GET, PUT, PATCH, DELETE, POST, middleware, requiredInputs, AppError, catchError };