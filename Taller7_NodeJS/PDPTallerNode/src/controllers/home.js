
let Book = require('../models/book');

module.exports.controller = function (server) {

    /**
     * a home page route
     */
    server.get('/', function (req, res) {
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
    });
}
