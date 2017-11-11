const fs = require('fs');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Book = require('./src/models/book');
const bodyParser = require('body-parser');
const uri = 'mongodb://localhost/libreries';
const _ = require("lodash");

mongoose.connect(uri, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30,
    useMongoClient: true
});

// dynamically include routes (Controller)
fs.readdirSync('./src/controllers').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        route = require('./src/controllers/' + file);
        route.controller(app);
    }
});

mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});

var router = express.Router();
app.use(router);


//app.set("view engine","pug");
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000);

app.get('/', function(req, res) {
    res.render('views/parameters');
});
// app.get("/books", function(req, res){
//     Book
//         .find({})
//         .exec(function(reason, data){
//             if(reason){
//                 res.status(500).send('Error al obtener la información. ' + reason);
//             } else {
//                 res.send(data);
//             }
//         });
// });
//
// app.post("/books", function(req, res){
//     Book.create(_.get(req, 'body', {}), function(reason, data){
//         if(reason){
//             res.status(500).send('Error al guardar la información. ' + reason);
//         } else {
//             res.send(data);
//         }
//     });
// });
//
// app.put("/books/:idBook", function(req, res){
//     console.log(req.params);
//     Book.update(
//         {"_id": _.get(req, 'params.idBook')},
//         _.get(req, 'body', {}),
//         {multi: false},
//         function(reason, data){
//             if(reason){
//                 res.status(500).send('Error al guardar la información. ' + reason);
//             } else {
//                 res.send(data);
//             }
//         }
//     );
// });
//
// app.delete("/books/:idBook", function(req, res){
//     Book
//         .remove({"_id": _.get(req, 'params.idBook')})
//         .exec(function(reason, data){
//             if(reason){
//                 res.status(500).send('Error al eliminar la información. ' + reason);
//             } else {
//                 res.send(data);
//             }
//         });
// });
