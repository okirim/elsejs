import { Mongoose } from "../App/singeltons/mongoose.singelton";
import redis from 'redis'

const url = "http://localhost:6379"
const client = redis.createClient(url)




   const exec = Mongoose.instance.Query.prototype.exec;

    //@ts-ignore
    Mongoose.instance.Query.prototype.cache = function (hkey ='default') { // ex: options={key:user_id}
        this.cacheIsUsed = true;
        this._hkey = hkey;
        return this;

    }

    Mongoose.instance.Query.prototype.exec = async function () {

        //make the cache() method optional

        if (this.cacheIsUsed === false) {
            //@ts-ignore
            return exec.apply(this, args);
        }

        //create key
       
        const key = JSON.stringify(Object.assign({}, this.getFilter(), { collection: this.mongooseCollection.name }));//we should stringify key before workin with redis

        //fetch if the key exist in redis
       
        client.hget(this._hkey, key, (dataInCache: any) => {
            const documents = JSON.parse(dataInCache)

            return Array.isArray(documents)
                ? documents.map(document => new this.model(document)) //if it's array
                : new this.model(dataInCache)//if it's object 
        })//return data from cache as mongoose document



        
        //@ts-ignore
        const result = await exec.apply(this, args)//make it on varibale to store it into redis
        //@ts-ignore
        client.hset(this._hkey, key, JSON.stringify(resultQuery), 'EX', 10)

        //end
        return result //return query result from mangodb

    }




export const clearHach=(hkey)=>
{
    client.del(JSON.stringify(hkey))
}




