// import redis from 'redis'
// import mongoose from 'mongoose';

// const url = "http://localhost:6379"
// const client = redis.createClient(url)

// interface Iquery{
//     cacheIsUsed: boolean,
//     _hkey:string
// }

// //@ts-ignore
//    const exec = mongoose.Query.prototype.exec;

//     //@ts-ignore
// mongoose.Query.prototype.cache = function (hkey:string = 'default') { // ex: options={key:user_id}
//             //@ts-ignore
//     this.cacheIsUsed = true;
//         //@ts-ignore
//         this._hkey = hkey;
//         return this;

//     }
// //@ts-ignore
// mongoose.Query.prototype.exec = async function () {

//         //make the cache() method optional
//     //@ts-ignore
//         if (this.cacheIsUsed === false) {
//             //@ts-ignore
//             return exec.apply(this, args);
//         }

//         //create key
//            //@ts-ignore
//         const key = JSON.stringify(Object.assign({}, this.getFilter(), { collection: this.mongooseCollection.name }));//we should stringify key before workin with redis

//         //fetch if the key exist in redis
//            //@ts-ignore
//         client.hget(this._hkey, key, (dataInCache: any) => {
//             const documents = JSON.parse(dataInCache)
//              //@ts-ignore
//             return Array.isArray(documents)    //@ts-ignore
// //                ? documents.map(document => new this.model(document)) //if it's array
//                     //@ts-ignore
//                 : new this.model(dataInCache)//if it's object 
//         })//return data from cache as mongoose document


// //
        
//         //@ts-ignore
//         const result = await exec.apply(this, args)//make it on varibale to store it into redis
//         //@ts-ignore
//         client.hset(this._hkey, key, JSON.stringify(resultQuery), 'EX', 10)

//         //end
//         return result //return query result from mangodb

//     }




// export const clearHach=(hkey:string)=>
// {
//     client.del(JSON.stringify(hkey))
// }




