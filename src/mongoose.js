/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 13:43:59
*------------------------------------------------------- */

import mongoose from 'mongoose';
import logger from './logger';

export default function (app) {
	mongoose.connect(
		app.get('mongodb'),
	).catch(err => {
		logger.error(err);
		process.exit(1);
	});

	mongoose.Promise = global.Promise;

	app.set('mongooseClient', mongoose);
}
