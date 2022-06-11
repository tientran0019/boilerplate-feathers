/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 13:43:49
*------------------------------------------------------- */

import { createLogger, format, transports } from 'winston';

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const logger = createLogger({
	// To see more detailed errors, change this to 'debug'
	level: 'info',
	format: format.combine(
		format.splat(),
		format.simple(),
	),
	transports: [
		new transports.Console(),
	],
});

export default logger;
