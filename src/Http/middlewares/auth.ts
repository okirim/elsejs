import { User } from '../../models/User/User';
import { AppError } from "../../exceptions/AppError";
import { promisify } from 'util';

import jwt from 'jsonwebtoken'
import { NextFunction, Response, RequestController } from '../BaseController';

export const auth = async (req: RequestController, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return next(new AppError("you should be logIn", 401));
    }
    const token = req.headers.authorization.split(' ')[1];
    //check the token 
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //get current user
    const currentUser = await User.findById(decoded.user_id);
    if (!currentUser) {
        return next(new AppError("user does not exist", 401));
    }
    if (currentUser.passwordUpdated(decoded.iat)) {
        return next(new AppError("password is changed, you should reconnect", 401));

    }
    //@ts-ignore
    req.user = currentUser;
    next();

};