import { App } from './singeltons/app.singelton';
import { catchUnhandledErros, UncaughtException } from '../exceptions/UnhandledErrors';
import { Mongoose } from './singeltons/mongoose.singelton';
import { dbConnection } from '../database/mongodb';
import "dotenv/config";
import 'reflect-metadata';
import '../Http/controllers';
import { _env } from './helpers/helpers';

const _App = () => {
    const _UncaughtException=UncaughtException();
    const _dbConnection=dbConnection(Mongoose.instance);
    const port = _env('PORT');
    const _server = App.instance.listen(port, () => {
        console.log(`App running on port ${port}...`);
    });

    const _catchUnhadledErrors = catchUnhandledErros(_server);
    
    return {
        _UncaughtException,
        _dbConnection,
        _server,
        _catchUnhadledErrors
    }
}

_App();