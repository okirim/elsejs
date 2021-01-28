import { App } from "../App/singeltons/app.singelton";
import { AppError } from "./AppError";

export const page404 = () => {
    App.instance.all('*', (req, res, next) => { //404 page not found

        next(new AppError(
            `Can't find ${req.originalUrl} on this server!`,
            404
        ));
    });
}