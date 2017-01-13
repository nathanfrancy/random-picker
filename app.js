var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var _log = require('comb').logger('picker.app');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(`404 Not Found - ${req.originalUrl}`);
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  var status = err.status || 500;
  if (err.status == 404)
    _log.warn(err);
  else
    _log.error(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(status);
  res.render('error');
});

module.exports = app;
