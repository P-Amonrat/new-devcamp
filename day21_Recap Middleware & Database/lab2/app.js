const express = require('express');
const app = express();
const pool  = require('./config/database');

const myModule = require('./my_module') (pool);

app.get('/', async function (req, res, next) {
    console.log( await myModule.getUserId(1) );
    console.log( await myModule.getStudentId(2) );
    res.send('Hello World');
    next();
});
app.listen(3000,);