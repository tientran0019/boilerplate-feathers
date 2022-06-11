/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 15:01:28
*------------------------------------------------------- */
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

const useRateLimit = (app) => {
	app.set('trust proxy', 1);

	const ignoreUrls = ['/api/v1/otps/send', '/api/v1/users/verification', '/api/v1/news'];

	const limiter = rateLimit({
		store: new RedisStore({}),
		windowMs: 1 * 60 * 1000,
		message: 'Bạn đã thao tác quá nhiều lần, vui lòng thử lại sau 1 phút nữa.',
		// skipFailedRequests: true,
		max: (req, res) => {
			if (!req.currentUser) {
				return 10;
			}
			return 1000;
		},
		skip: (req) => {
			if (ignoreUrls.includes(req.originalUrl?.split('?')?.[0])) {
				return true;
			}
			return false;
		},
	});

	//  apply to all requests
	app.use('/api/', limiter);

	const otpLimiter = rateLimit({
		store: new RedisStore({}),
		windowMs: 56 * 1000,
		// skipFailedRequests: true,
		message: 'Bạn đã thao tác quá nhiều lần, vui lòng thử lại sau 1 phút nữa.',
		max: 3,
	});

	app.use('/api/v1/otps/send', otpLimiter);
	app.use('/api/v1/users/verification', otpLimiter);
};

export default useRateLimit;
