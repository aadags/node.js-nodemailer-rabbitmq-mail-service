import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class RoleRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('role', id)
        this.id = id;
    }

}


