import { App } from './singeltons/app.singelton';
import '.';
import { catchUnhandledErros, UncaughtException } from '../utils/UnhandledErrors';
import { Mongoose } from './singeltons/mongoose.singelton';
import { dbConnection } from '../database/mongodb';

const _App = () => {
    const _UncaughtException=UncaughtException();
    const _dbConnection=dbConnection(Mongoose.instance);
    const port = process.env.PORT || 3000;
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