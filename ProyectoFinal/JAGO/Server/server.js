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
app.use(constants.SERVER_ROUTE, router);

const server = app.listen(constants.SERVER_PORT, () => {
                  console.log('server is running on port ' + constants.SERVER_PORT);
              });

const io = socket(server);

io.on('connection', socket => {
    const idSocketUser = socket.id;
    io.to(idSocketUser).emit('CONNECT_RESULT', {isConnection: true});
    async.waterfall([
        function(cb){
            gameModel
                .find({"online": {"$ne": false}, deleted: {"$ne": true}, "finalized": {"$ne": true}})
                .exec(cb);
        }, function(games, cb){
            const gameGroup = _.groupBy(games, 'type');
            const data = _.chain(gameGroup)
                          .keys()
                          .map(key => _.set({}, key, _.chain(gameGroup)
                                                      .get(key, [])
                                                      .map(value => _.pick(value, ['team1', 'team2', 'period', 'finalized']))
                                                      .value()))
                          .reduce((sum, a) => _.assign(sum, a) ,{})
                          .value();
            cb(null, data);
        }
    ], function(reason, data){
        io.to(idSocketUser).emit('SEND_RESULT_MESSAGE', data);
    });

    socket.on('UPDATE-GAMES', function(data) {
        async.waterfall([
            function(cb){
                gameModel
                    .find({"online": {"$ne": false}, deleted: {"$ne": true}, "finalized": {"$ne": true}})
                    .exec(cb);
            }, function(games, cb){
                const gameGroup = _.groupBy(games, 'type');
                const data = _.chain(gameGroup)
                              .keys()
                              .map(key => _.set({}, key, _.chain(gameGroup)
                                                          .get(key, [])
                                                          .map(value => _.pick(value, ['team1', 'team2', 'period', 'finalized']))
                                                          .value()))
                              .reduce((sum, a) => _.assign(sum, a) ,{})
                              .value();
                cb(null, data);
            }
        ], function(reason, data){
            io.emit('SEND_RESULT_MESSAGE', data);
        });
    });

});
