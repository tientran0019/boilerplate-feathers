/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 13:44:08
*------------------------------------------------------- */

import swagger from 'feathers-swagger';

export default swagger({
	uiIndex: true,
	docsPath: '/docs',
	openApiVersion: 3,
	specs: {
		info: {
			title: 'A test',
			description: 'A description',
			version: '1.0.0',
		},
		schemes: ['http', 'https'], // Optionally set the protocol schema used (sometimes required when host on https)
		components: {
			securitySchemes: {
				BasicAuth: {
					type: 'http',
					scheme: 'basic',
				},
				BearerAuth: {
					type: 'http',
					scheme: 'bearer',
				},
			},
		},
		security: [
			{ BearerAuth: [] },
		],
	},
});
