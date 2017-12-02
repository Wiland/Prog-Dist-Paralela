const mongoose = require('mongoose'),
      constants = require("./constants");

const mongo = `mongodb://${constants.MONGO_HOST}:${constants.MONGO_PORT}/${constants.MONGO_DATABASE}`;
mongoose.connect(mongo, {
                    useMongoClient: true
                });
mongoose.Promise = require('bluebird');
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
