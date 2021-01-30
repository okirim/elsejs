
import { catchUnhandledErros, UncaughtException } from '../exceptions/UnhandledErrors';
import { App } from './singeltons/app.singelton';
import { dbConnection } from '../database/mongodb';
import "dotenv/config";
import 'reflect-metadata';
import '../Http/controllers';
import { _env } from './helpers/helpers';
import { AppError } from '../Http/controllers';
import { NextFunction } from 'express';
import { HandlingErrors } from '../exceptions';
import { Request } from 'express'
import { _use } from '../use';





const _App = function () {
 
    //App.instance.use(cookieSession({ keys: ['setRandomKeyString'] }))

    
    App.instance.all('*', (req: Request, res: Response, next: NextFunction) => { //404 page not found

        next(new AppError(
            `Can't find ${req.originalUrl} on this server!`,
            404
        ));
    });
    App.instance.use(HandlingErrors);



    const _UncaughtException = UncaughtException();
    const _dbConnection = dbConnection();
    const port = _env('PORT');
    const _server = App.instance.listen(port, () => {
        console.log(`App running on port ${port}...`);
    });
    const _catchUnhadledErrors = catchUnhandledErros(_server);
}
_use()
_App()

