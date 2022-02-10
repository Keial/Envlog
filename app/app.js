/* รียกใช้งานแพกเกจ*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require("axios");
const expressLayouts = require ('express-ejs-layouts');
/*---------------------------------------------------------------*/

/* เรียกใช้งาน model*/
//const dbo_config = require('../models/dbo_config');
//const dbo_raw = require('../app/models/');
//const dbo_1min_avr = require('../models/dbo_raw');
/*---------------------------------------------------------------*/

/* เรียกใช้งาน router*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var historyRouter = require("./routes/history")
/*---------------------------------------------------------------*/


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set('layout','./layouts/layout');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/history", historyRouter);


/*   route page     */



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
