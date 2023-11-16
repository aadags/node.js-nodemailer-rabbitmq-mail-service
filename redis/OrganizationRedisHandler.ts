import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class OrganizationRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('organization', id)
        this.id = id;
    }

}


