'use strict';
let mongoose = require('mongoose'),
  Book = mongoose.model('book');

exports.list_all_books = function (req, res) {
  Book.find({}, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(book);
  });
};


exports.create_a_book = function (req, res) {
  let new_book = new Book(req.body);
  new_book.save(function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(201).json(book);
  });
};

exports.read_a_book = function (req, res) {
  Book.findById(req.params.bookId, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(book);
  });
};

exports.update_a_book = function (req, res) {
  Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(201).json(book);
  });
};

exports.delete_a_book = function (req, res) {
  Book.remove({
    _id: req.params.bookId
  }, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(201).json({ message: 'Libro exitosamente eliminado.' });
  });
}

exports.get_book_count = function (req, res){
  Book.count({}, function (err, counter) {
    if (err)
      res.status(400).send(err);
    res.status(200).json(counter);
  });
}
