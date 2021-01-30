
import mongoose from 'mongoose'


export const dbConnection = () => {

  if (process.env.DB_LOCAL) {
    mongoose.connect(process.env.DB_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then((res) => console.log('DB connected', process.env.DB_LOCAL))
      .catch(err => console.log('DB Error Connection: ', err))
}
}