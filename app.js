var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const apiRouter = require('./routes/api');
const cors = require('cors');

// let mysql = require('mysql');
// let connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'root',
//   database: 'proyecto_recicla',
//   port:8889
//   });

// connection.connect((err)=>{
//     if(err) return console.log(err.message);
//     //ESTE ES EL ÚNICO LUGAR DONDE SE PUEDEN HACER QUERYS
//     connection.query('SELECT * FROM hijos',(err,rows)=>{
//       //console.log(rows);
//       });
    
//     console.log('conexión realizada con exito');
// });


    
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./db');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api',apiRouter);

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
