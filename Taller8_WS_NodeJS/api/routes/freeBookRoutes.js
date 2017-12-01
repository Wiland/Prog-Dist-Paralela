'use strict';

module.exports = function(app) {
	let bookController = require('../controllers/bookController');

	// task Routes
	app.route('/count')
		.get(bookController.get_book_count);
};
