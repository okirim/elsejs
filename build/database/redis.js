"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caching = void 0;
var mongoose_singelton_1 = require("../App/singeltons/mongoose.singelton");
var redis_1 = __importDefault(require("redis"));
var url = "http://localhost:6379";
var client = redis_1.default.createClient(url);
// import { promisify } from 'util';
// import { Mongoose } from '../App/singeltons/mongoose.singelton';
// client.HGET = promisify(client.HGET)// to return a promise  (we don't like to use callback)
//------------------------------------------------------
exports.caching = function () {
    var exec = mongoose_singelton_1.Mongoose.instance.Query.prototype.exec;
    //-----------------------------------------------------------
    //@ts-ignore
    mongoose_singelton_1.Mongoose.instance.Query.prototype.cache = function (options) {
        if (options === void 0) { options = { key: 'default' }; }
        this._cache = true;
        this._hkey = options.key;
        return this;
    };
    mongoose_singelton_1.Mongoose.instance.Query.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, resultQuery;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //make the cache() method optional
                        if (this._cache === false) {
                            //@ts-ignore
                            return [2 /*return*/, exec.apply(this, args)];
                        }
                        key = JSON.stringify(Object.assign({}, this.getFilter(), { collection: this.mongooseCollection.name }));
                        //fetch is the key exist in redis
                        //2/
                        client.hget(this._hkey, key, function (dataInCache) {
                            var documents = JSON.parse(dataInCache);
                            return Array.isArray(documents)
                                ? documents.map(function (doc) { return new _this.model(doc); }) //if is array
                                : new _this.model(dataInCache); //if is object 
                        }); //return data from cache as mongoose document
                        return [4 /*yield*/, exec.apply(this, args)
                            //@ts-ignore
                        ]; //make it on varibale to store it into redis
                    case 1:
                        resultQuery = _a.sent() //make it on varibale to store it into redis
                        ;
                        //@ts-ignore
                        client.hset(this._hkey, key, JSON.parse(resultQuery), 'EX', 10);
                        //end
                        //@ts-ignore
                        return [2 /*return*/, result]; //return query result from mangodb
                }
            });
        });
    };
};
//------------------------------------------------------------------
// export  clearHach(_hkey)
// {
//     client.del(_hkey)
// }
//----hkey should be number or string
