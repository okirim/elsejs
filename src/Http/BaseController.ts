import { Response, Request, NextFunction } from 'express'

import { controller, GET, middleware, POST, required } from '../App/decorators';

export interface RequestController extends Request {
    body: { [key: string]: string | undefined }
}

export { Response, Request, NextFunction, controller, GET, middleware, POST, required };