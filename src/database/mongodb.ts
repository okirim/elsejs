import mongoose from "mongoose";
let DB_MONGOOSE_URL = process.env.DB_LOCAL;

if (process.env.NODE_ENV = 'production') {
  DB_MONGOOSE_URL = process.env.DB_MONGOOSE_URL;
}

if (DB_MONGOOSE_URL) {
  mongoose.connect(DB_MONGOOSE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then((res) => console.log('DB connected'))
    .catch(err => console.log('DB connection error :' + err));
}



