const express = require('express'),
      socket = require('socket.io'),
      bodyParser = require('body-parser'),
      async = require("async"),
      _ = require("lodash");

const middleware = require("./config/middleware"),
     constants = require("./config/constants"),
     models = require("./config/models"),
     gameModel = models.gameModel,
     app = express();

     app.use(middleware);
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

let gameRoutes = require('./api/routes/gameRoutes');
gameRoutes(app);


app.use(constants.SERVER_ROUTE, router);

const server = app.listen(constants.SERVER_PORT, () => {
                  console.log('server is running on port ' + constants.SERVER_PORT);
});
