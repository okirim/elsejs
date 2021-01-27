// const redis =require('redis');
// const mongoose = require("mongoose");
// const url = "http:\\localhost:6379"
// const client = redis.createClient(url)
// // import { promisify } from 'util';
// // import { Mongoose } from '../App/singeltons/mongoose.singelton';
// // client.HGET = promisify(client.HGET)// to return a promise  (we don't like to use callback)
// const exec = mongoose.Query.prototype.exec;
// //-----------------------------------------------------------
// mongoose.Query.prototype.cache=function(options = {key:'default'}) { // ex: options={key:user_id}
//         this._cache = true;
//         this._hkey = options.key;
//         return this;
//     }
// //------------------------------------------------------
// mongoose.Query.prototype.exec = async function (args) {
//         //make the cache() method optional
//         if (this._cache === false) {
//             return exec.apply(this, args);
//         }
//         //create key
//         //1/
//         const key = JSON.stringify(Object.assign({}, this.getFilter(), { collection: mongooseCollection.name }));//we should stringify key before workin with redis
//         //fetch is the key exist in redis
//         //2/
//          client.HGET(this._hkey, key,(dataInCache:any)=> {
//              const documents = JSON.parse(dataInCache)
//             return Array.isArray(documents)
//                 ? documents.map(doc => new this.model(doc)) //if is array
//                 : new this.model(dataInCache)//if is object 
//         })//return data from cache as mongoose document
//         //3-
//         const resultQuery = await exec.apply(this, args)//make it on varibale to store it into redis
//         client.HSET(this._hkey, key, JSON.parse(resultQuery), 'EX', 10)
//         //end
//         return result //return query result from mangodb
//     }
// //------------------------------------------------------------------
// // export  clearHach(_hkey)
// // {
// //     client.del(_hkey)
// // }
// //----hkey should be number or string
