
import redisClient from './redis';
require('dotenv').config;

export default class RedisHandler {
    module: string;
    id : string;

    expiresIn: number = parseInt(process.env.CACHE_DURATION ?? '86400' );  


    constructor(module : string, id : string){
        this.module = module;
        this.id = id;
    }

    get cacheKey(){
        return `${this.module}:${this.id}`
    }

    get instance(){
        return redisClient;
    }

    async getCachedValue(){
       const cache = await redisClient.get(this.cacheKey);
       return cache ? JSON.parse(cache) : null;
    }

    async setKey(result : any) {
        return await redisClient.setEx(this.cacheKey, this.expiresIn, JSON.stringify(result))
    }

    async invalidateCacheValue() {
        const result = await redisClient.get(this.cacheKey);  // Ensure this is awaited
         if (result != null){
             await redisClient.del(this.cacheKey);
         }    
    }

}


