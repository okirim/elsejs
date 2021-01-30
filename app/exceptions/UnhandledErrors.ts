export const  UncaughtException = () => {
    process.on("uncaughtException", (err) => {

        console.log("UNCAUGHT EXCEPTION");
        console.log(err.name, err.message);
        process.exit(1);
    });
}


export const catchUnhandledErros = (server:any) => {
  
    //like database connection error //non gerer
    process.on("unhandledRejection", (err) => {
        console.log("UNHANDLED REJECTION");
        //console.log(err.name, err.message);
        server.close(() => {
            process.exit(1);
        });
    });
}