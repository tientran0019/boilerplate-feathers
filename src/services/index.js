/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-06-11 13:54:15
*------------------------------------------------------- */
import users from './users/users.service';
import news from './news/news.service';

// eslint-disable-next-line no-unused-vars
export default (app) => {
	app.configure(users);
	app.configure(news);
};
