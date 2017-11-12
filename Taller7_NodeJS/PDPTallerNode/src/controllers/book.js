var mongoose = require('mongoose');
var Book = require('../models/book');
let bodyParser = require('body-parser');
const _ = require("lodash");
var Promise = require('mpromise');

module.exports.controller = function (app) {

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.get("/books", function(req, res){
        Book
            .find({})
            .exec(function(reason, data){
                if(reason){
                  res.render('pages/books.ejs', {
                    error: reason.message,
                    book: null,
                    books: []
                  });
                } else {
                  res.render('pages/books.ejs', {
                      book: null,
                      books: data
                  });
                }
            });
    });

    app.get("/book", function(req, res){
      res.render('pages/book.ejs', {});
    });

    app.post("/books", function(req, res){
        Book.create(_.get(req, 'body', {}), function(reason, data){
            if(reason){
              res.render('pages/book.ejs', {
                  error: reason.message,
                  book: data,
                  created: false
              });
            } else {
              res.render('pages/book.ejs', {
                  created: true
              });
            }
        });
    });

    app.get("/books/:idBook", function(req, res){
        console.log(req.params);
        Book.findById(
            {"_id": _.get(req, 'params.idBook')},
            _.get(req, 'body', {}),
            {multi: false, upset:true},
            function(reason, data){
                if(reason){
                  res.render('pages/books.ejs', {
                    error: reason.meesage,
                    book: data
                  });
                } else {
                  res.render('pages/book_edit.ejs', {
                      book: data
                  });
                }
            }
        );
    });

    app.post("/books/:idBook", function(req, res){
        console.log(req.params);
        req.body._id = _.get(req, 'params.idBook');
        if (req.body.pages < 1 || req.body.pages > 1000 ) {
          res.render('pages/book_edit.ejs', {
              error: "El número de páginas debe estar entre 1 y 1000",
              book: req.body
          });
          return;
        }
        if (req.body.price < 1 || req.body.price > 100000 ) {
          res.render('pages/book_edit.ejs', {
              error: "El precio debe estar entre $0 y $100000",
              book: req.body
          });
          return;
        }
        Book.update(
            {"_id": _.get(req, 'params.idBook')},
            _.get(req, 'body', {}),
            {multi: false, upset:true},
            function(reason, data){
                if(reason){
                    res.render('pages/book_edit.ejs', {
                        error: reason.message,
                        book: data
                    });
                } else {
                  Book
                      .find({})
                      .exec(function(reason, data){
                          if(reason){
                            res.render('pages/books.ejs', {
                                error: reason.message,
                                book: data
                            });
                          } else {
                            res.render('pages/books.ejs', {
                                book: null,
                                books: data
                            });
                          }
                      });
                  };
                });
    });

    app.get("/books/delete/:idBook", function(req, res){
        Book
            .remove({"_id": _.get(req, 'params.idBook')})
            .exec(function(reason, data){
                if(reason){
                    res.status(500).send('Error al eliminar la información. ' + reason);
                } else {
                  Book
                      .find({})
                      .exec(function(reason, data){
                          if(reason){
                              res.status(500).send('Error al obtener la información. ' + reason);
                          } else {
                            res.render('pages/books.ejs', {
                                book: null,
                                books: data
                            });
                          }
                      });
                }
            });
    });


    //
    // app.get('/books', function (req, res) {
    //     res.render('pages/book.ejs', {
    //         book: null,
    //     });
    // });

    // app.get('/books/:id', function (req, res) {
    //     Parameter.findById(req.params.id, (err, doc) => {
    //         console.log(doc);
    //         res.render('pages/book_edit.ejs', {
    //             book: doc
    //         });
    //     });
    // });
    //
    // app.post('/books', function (req, res) {
    //     console.log(req.body.parameter.parameter);
    //     var parameter = new Parameter({ book: req.body.parameter, bookInc: req.body.parameter });
    //     var promise = parameter.save();
    //     promise.onResolve(function (err) {
    //         if (err) {
    //             console.log(err.message); // mensajes de error
    //             res.render('pages/book.ejs', {
    //                 error: err.message
    //             });
    //         }
    //         Parameter.find({}, (err, docs) => {
    //             res.render('pages/books.ejs', {
    //                 book: parameter.get("booksInc"),
    //                 books: docs
    //             });
    //         });
    //     });
    // });
    //
    // app.put('/books/:id', function (req, res) {
    //     console.log(req.params.id);
    //     Parameter.findById(req.params.id, (err, doc) => {
    //         doc.parameter = req.body.parameter;
    //         var promise = doc.save();
    //         promise.onResolve(function (err) {
    //             if (err) {
    //                 console.log(err.message); // mensajes de error
    //                 res.render('pages/book_edit.ejs', {
    //                     error: err.message,
    //                     book: doc
    //                 });
    //             }
    //             Parameter.find({}, (err, docs) => {
    //                 res.render('pages/books.ejs', {
    //                     book: doc.get("bookInc"),
    //                     books: docs
    //                 });
    //             });
    //         });
    //     });
    // });
    //
    // app.post('/books/:id', function (req, res) {
    //     Parameter.findById(req.params.id, (err, doc) => {
    //         doc.parameter = req.body.parameter;
    //         var promise = doc.save();
    //         promise.onResolve(function (err) {
    //             if (err) {
    //                 console.log(err.message); // mensajes de error
    //                 res.render('pages/book_edit.ejs', {
    //                     error: err.message,
    //                     book: doc
    //                 });
    //             }
    //             Parameter.find({}, (err, docs) => {
    //                 res.render('pages/books.ejs', {
    //                     book: doc.get("bookInc"),
    //                     books: docs
    //                 });
    //             });
    //         });
    //     });
    // });
    //
    // app.get('/parameter/delete/:id', function (req, res) {
    //     Parameter.remove({ _id: req.params.id }, function (err) {
    //         console.log(req.params.id);
    //         if (!err) {
    //             Parameter.find({}, (err, docs) => {
    //                 res.render('pages/books.ejs', {
    //                     book: null,
    //                     books: docs
    //                 });
    //             });
    //         }
    //         else {
    //             message.type = 'error';
    //         }
    //     });
    // });

}
