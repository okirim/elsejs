import { Mongoose } from "../App/singeltons/mongoose.singelton";
import redis from 'redis'

const url = "http://localhost:6379"
const client = redis.createClient(url)

// import { promisify } from 'util';
// import { Mongoose } from '../App/singeltons/mongoose.singelton';



// client.HGET = promisify(client.HGET)// to return a promise  (we don't like to use callback)




//------------------------------------------------------

export const caching = () => {
    const exec = Mongoose.instance.Query.prototype.exec;

    //-----------------------------------------------------------
    //@ts-ignore
    Mongoose.instance.Query.prototype.cache = function (options = { key: 'default' }) { // ex: options={key:user_id}
        this._cache = true;
        this._hkey = options.key;
        return this;

    }

    Mongoose.instance.Query.prototype.exec = async function () {

        //make the cache() method optional

        if (this._cache === false) {
            //@ts-ignore
            return exec.apply(this, args);
        }

        //create key
        //1/
        const key = JSON.stringify(Object.assign({}, this.getFilter(), { collection: this.mongooseCollection.name }));//we should stringify key before workin with redis

        //fetch is the key exist in redis
        //2/
        client.hget(this._hkey, key, (dataInCache: any) => {
            const documents = JSON.parse(dataInCache)

            return Array.isArray(documents)
                ? documents.map(doc => new this.model(doc)) //if is array
                : new this.model(dataInCache)//if is object 
        })//return data from cache as mongoose document



        
        //@ts-ignore
        const resultQuery = await exec.apply(this, args)//make it on varibale to store it into redis
        //@ts-ignore
        client.hset(this._hkey, key, JSON.parse(resultQuery), 'EX', 10)

        //end
        //@ts-ignore
        return result //return query result from mangodb

    }
}


//------------------------------------------------------------------
// export  clearHach(_hkey)
// {
//     client.del(_hkey)
// }


//----hkey should be number or string





