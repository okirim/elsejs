
import mongoose from 'mongoose'


export const dbConnection = (mongooseInstance: mongoose.Mongoose) => {

  if (process.env.DB_LOCAL) {
    mongooseInstance.connect(process.env.DB_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then((res) => console.log('DB connected', process.env.DB_LOCAL))
      .catch(err => console.log('DB Error Connection: ', err))
}
}