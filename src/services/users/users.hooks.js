/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 14:03:27
*------------------------------------------------------- */
import { hooks as authenticationHook } from '@feathersjs/authentication';

import { hooks as authenticationLocalHook } from '@feathersjs/authentication-local';

const { authenticate } = authenticationHook;
const { hashPassword, protect } = authenticationLocalHook;

export default {
	before: {
		all: [],
		find: [authenticate('jwt')],
		get: [authenticate('jwt')],
		create: [hashPassword('password')],
		update: [hashPassword('password'), authenticate('jwt')],
		patch: [hashPassword('password'), authenticate('jwt')],
		remove: [authenticate('jwt')],
	},

	after: {
		all: [
			// Make sure the password field is never sent to the client
			// Always must be the last hook
			protect('password'),
		],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},
};
