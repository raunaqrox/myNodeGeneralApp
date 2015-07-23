"use strict"

/**
  Dependencies
*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const logger = require('./logger/logger');
const config = require('./config/config');

/**
  Global variables
*/
const url = "mongodb://" + config.mongo.username + config.mongo.password + "@" + config.mongo.url;
const port = 3000;

/**
  Middleware
*/
app.use(express.static('public'));
morgan("dev", {stream:logger.stream});
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/**
  Routes
*/
app.get('/', function(req,res){
  res.render('index');
});


mongoose.connect(url, function (error) {
    if (error)return logger.info(error);
    logger.info("MongoDB: connection to database succesful!");

    var server = app.listen(port, function () {
      logger.info('Express: listening port: ', server.address().port);
    });

});

var endMongoConnection = function() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', endMongoConnection).on('SIGTERM', endMongoConnection);
