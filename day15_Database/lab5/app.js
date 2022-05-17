var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/users', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    password: 'root',  // <== ระบุให้ถูกต้อง
    database: 'Devcamp',
    port : 8889  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  
  // เปิด connection ไปที่ database
  connection.connect();
  
  connection.query('SELECT * from user', (err, rows, fields) => {
    if (err) throw err;
  
    // return response กลับไปหา client โดยแปลง record เป็น json array
    res.json(rows);
  });
  
  // ปิด connection
  connection.end();
  });
  
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
