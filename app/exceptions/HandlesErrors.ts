import { AppError } from "./AppError";
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';


interface IError extends ErrorRequestHandler{
    statusCode: number,
    status: string,
    name: string,
    code: number,
    message: string,
    stack: string,
    isOperational: boolean,
    path: string,
    value: string,
    keyValue: string,
    errors:IError[]
}

type ErrorFunction= (err?: IError)=>void;

export const HandlingErrors = (err: IError, req:Request, res:Response, next:NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV == "developement") {
        devErrorResponse(err, res);
    } else if (process.env.NODE_ENV == "production") {
        //others errors
        let error:any = { ...err }
        // console.log(`---------------${err.name}--------------`)
        if (error.name === "CastError") error = handleCastErrorDB(error); //invalid ID
        if (error.code === 11000) error = handleDuplicateFieldsDB(error); //duplicate database field
        if (err.name === "ValidationError") error = handleValidationErrorDB(error);   //validation error 
        if (err.name === 'TokenExpiredError') error = jwtExpiredToken();
        if (err.name === "JsonWebTokenError") error = jwtErrorToken();
        if (err.name === "NotBeforeError") error = jwtTokenInvalidBefore();

        prodErrorResponse(error, res);
    };
}

/*
  @devlopement env
*/

const devErrorResponse = (err: IError, res:Response) => {

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
}
/*
  @production env
*/
const prodErrorResponse = (err:IError, res:Response) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            error: err,
        });
    } else {
        // 1) Log error
        console.error("ERROR 💥", err);

        // 2) Send generic message
        res.status(500).json({
            status: "error",
            message: "Something went very wrong!",
        });
    }
};

/*
  @invalid ID
*/
const handleCastErrorDB = (err:IError) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};
/*
  @duplication field
*/
const handleDuplicateFieldsDB = (err:IError) => {

    const value = Object.keys(err.keyValue);
    //  console.log(value);

    const message = `${value} already exists. Please use another value!`;
    return new AppError(message, 400);
};
/*
  @valiationd error
*/
const handleValidationErrorDB = (err:IError) => {
   
    const errors = Object.values(err.errors).map((el:IError) => el.message);

    const message = `Invalid input data. ${errors.join(". ")}`;
    return new AppError(message, 400);

};

const jwtExpiredToken = () => {
    return new AppError('you should login, expired session', 401);
}
const jwtErrorToken = () => {
    return new AppError("invalid token", 401);
};
const jwtTokenInvalidBefore = () => {
    //return new AppError(`invalid token before ${err.date}`, 401);
    return new AppError(`invalid token bedfore incoming date`, 401);
};