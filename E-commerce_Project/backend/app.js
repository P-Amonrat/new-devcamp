var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const fileupload = require("express-fileupload");

var createRouter = require('./routes/createProduct');
var productRouter = require('./routes/product');
var updateRouter = require('./routes/updateProduct');
var deleteRouter = require('./routes/deleteProduct');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(fileupload());

app.use('/api/product', productRouter);
app.use('/api/create', createRouter);
app.use('/api/update', updateRouter);
app.use('/api/delete', deleteRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

module.exports = app;
