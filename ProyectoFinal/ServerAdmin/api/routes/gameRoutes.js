'use strict';

module.exports = function(app) {
	let gameController = require('../controllers/gameController');

	// task Routes
	app.route('/games')
		.get(gameController.list_all_games)
		.post(gameController.create_a_game);

	app.route('/game/:gameId')
		.get(gameController.read_a_game)
		.put(gameController.update_a_game)
		.delete(gameController.delete_a_game);
};
