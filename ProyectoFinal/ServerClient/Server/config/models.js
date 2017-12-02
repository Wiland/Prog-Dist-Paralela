const gameSchema = require("../models/games"),
      db = require("./connection");

module.exports = {
    gameModel: db.model('games', gameSchema)
};
