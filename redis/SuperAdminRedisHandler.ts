import RedisHandler from './redisHandler';

export default class SuperAdminRedisHandler extends RedisHandler {
    constructor() {
        // 'superadmin' can be a fixed key for caching super admins list
        super('superadmin', 'list');
    }

}
