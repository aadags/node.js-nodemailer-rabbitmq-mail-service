import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class CareTeamRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('careTeam', id)
        this.id = id;
    }

}


