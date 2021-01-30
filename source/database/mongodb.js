"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
var dbConnection = function (mongooseInstance) {
    if (process.env.DB_LOCAL) {
        mongooseInstance.connect(process.env.DB_LOCAL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }).then(function (res) { return console.log('DB connected', process.env.DB_LOCAL); })
            .catch(function (err) { return console.log('DB Error Connection: ', err); });
    }
};
exports.dbConnection = dbConnection;
