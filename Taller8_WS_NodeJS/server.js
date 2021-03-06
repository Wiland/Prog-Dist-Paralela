let express = require('express'),
  app = express(),
  port = 4000,
  mongoose = require('mongoose'),
  Book = require('./api/models/bookModel'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser'),
  cors = require('cors')
  morgan = require('morgan');

let jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
let config = require('./config'); // get our config file

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('superSecret', config.secret); // secret letiable

// use morgan to log requests to the console
app.use(morgan('dev'));

//Services without authentication
let userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

let freeBookRoutes = require('./api/routes/freeBookRoutes');
freeBookRoutes(app);

app.use(cors());

let apiRoutes = express.Router();
apiRoutes.use(function (req, res, next) {

  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.param('token') || req.headers['x-access-token'];
  let token = null;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        return res.status(400).json({ success: false, message: 'Token erroneo!!!' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No se envió token.'
    });

  }

});
app.use(apiRoutes);

//Services with authentication
let bookRoutes = require('./api/routes/bookRoutes');
bookRoutes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' no encontrada...' })
});

app.listen(port);
