import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class UserRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('user', id)
        this.id = id;
    }

}


