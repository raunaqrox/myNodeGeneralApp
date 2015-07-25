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
const cookieParser = require('cookie-parser');
const session = require('express-session');

/**
  Global variables
*/
const url = "mongodb://" + config.mongo.username + config.mongo.password + "@" + config.mongo.url;
const port = 3000 || process.env.port;
var loggedIn = false;

/**
  Middleware
*/

morgan("dev", {stream:logger.stream});
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/**
  Routes
*/
app.get('/', function(req,res){
  res.render('index');
});

app.get('/login', function(req,res){
  res.render('login', {'loggedIn':loggedIn});
});

app.get('/register', function(req,res){
  res.render('register', {'loggedIn':loggedIn});
});

app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
});

app.get('/profile', isLoggedIn, function(req, res){
  res.render('profile');
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

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
