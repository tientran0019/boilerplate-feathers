/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 14:03:12
*------------------------------------------------------- */

// Initializes the `news` service on path `/news`
import News from './news.class';
import createModel from '../../models/news.model';
import hooks from './news.hooks';

export default (app) => {
	const options = {
		Model: createModel(app),
		paginate: app.get('paginate'),
	};

	// Initialize our service with any options it requires
	app.use('/news', new News(options, app));

	// Get our initialized service so that we can register hooks
	const service = app.service('news');

	service.hooks(hooks);
};
