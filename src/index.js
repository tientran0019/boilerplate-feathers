/* eslint-disable no-console */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 13:43:41
*------------------------------------------------------- */

import logger from './logger';
import app from './app';

const port = app.get('port');

const server = app.listen(port);

process.on('unhandledRejection', (reason, p) => {
	logger.error('Unhandled Rejection at: Promise ', p, reason);
});

server.on('listening', () => {
	logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
});
