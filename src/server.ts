import { App } from './App/singeltons/app.singelton';

process.on("uncaughtException", (err) => {

    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});



const server = App.instance.listen(process.env.PORT, () => {
    console.log('server is running on port ' + process.env.PORT)
});
//like database connection error //non gerer
process.on("unhandledRejection", (err) => {
    // console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    // console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});