// import 'reflect-metadata';
// import { Request,Response,RequestHandler, NextFunction } from 'express';
// import { metadata } from './enums/enum.metadata';

// export function catchError(middlewareCatchError: any = CatchError) {
//     return function (target: any, key: string, descriptor: PropertyDescriptor) {
//         Reflect.getMetadata(metadata.catchError, target, key);
//         Reflect.defineMetadata(metadata.catchError, middlewareCatchError, target, key)
//     }

// }
// const CatchError = async (req: Request, res: Response, next: NextFunction) => {
//  await next()
    
//     throw new Error('errrrrkadiro')

// };