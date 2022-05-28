const express = require('express')
const app = express()
const mysql = require('mysql2/promise')

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'Devcamp',
    port        : 8889
 });
 
 app.get('/user', async function (req, res, next) {
    const [rows, fields] = await pool.query('SELECT * FROM user');
    res.status(200).json(rows[0]);
});

app.get('/student', async function (req, res, next) {
    const [rows, fields] = await pool.query('SELECT * FROM students');
    res.status(200).json(rows[0]);
});


app.listen(4000, () => {
    console.log("server started on port 3000!");
  });