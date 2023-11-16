import { RedisClientType } from 'redis';
import RedisHandler from './redisHandler';

export default class PatientRedisHandler extends  RedisHandler{

    id : string;
    constructor( id : string){
        super('patient', id)
        this.id = id;
    }

}


