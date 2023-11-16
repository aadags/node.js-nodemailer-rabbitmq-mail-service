import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class ModuleRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('module', id)
        this.id = id;
    }

}


