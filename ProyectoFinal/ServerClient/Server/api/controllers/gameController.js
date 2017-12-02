'use strict';

let mongoose = require('mongoose'),
  Game = mongoose.model('games');

exports.list_all_games = function (req, res) {
  Game.find({}, function (err, game) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(game);
  });
};


exports.create_a_game = function (req, res) {
  let new_game = new Game(req.body);
  new_game.save(function (err, game) {
    if (err)
      res.status(400).send(err);
    res.status(201).json(game);
  });
};

exports.read_a_game = function (req, res) {
  Game.findById(req.params.gameId, function (err, game) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(game);
  });
};

exports.update_a_game = function (req, res) {
  Game.findOneAndUpdate({ _id: req.params.gameId }, req.body, { new: true }, function (err, game) {
    if (err)
      res.status(400).send(err);
    res.status(201).json(game);
  });
};

exports.delete_a_game = function (req, res) {
  Game.remove({
    _id: req.params.gameId
  }, function (err, game) {
    if (err)
      res.status(400).send(err);
    res.status(201).json({ message: 'Juego exitosamente eliminado.' });
  });
}

exports.get_game_count = function (req, res){
  Game.count({}, function (err, counter) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(counter);
  });
}
