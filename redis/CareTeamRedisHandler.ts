import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class ClinicalInfoRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('clinicalInfo', id)
        this.id = id;
    }

}


