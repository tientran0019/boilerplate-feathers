/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 15:01:35
*------------------------------------------------------- */

import redis from 'redis';

const client = redis.createClient(6379);

const ENV = process.env.NODE_ENV || 'stating';

client.on('error', (error) => {
	console.error('Redis server ', error);
});

client.getCache = (key) => {
	return new Promise((resolve, reject) => {
		client.get(key + ENV, (err, user) => {
			if (err) {
				reject(err);
			}

			if (user) {
				return resolve(JSON.parse(user));
			}

			return resolve(null);
		});
	});
};

client.setCache = (key, data, ttl = 300) => {
	client.setex(key + ENV, ttl, JSON.stringify(data));
};

export default client;
