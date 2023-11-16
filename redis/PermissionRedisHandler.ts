import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class PermissionRedisHandlerRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('permission', id)
        this.id = id;
    }

}


