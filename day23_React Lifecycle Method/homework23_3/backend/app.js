const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/users', (req, res) => {
 const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'Devcamp',
   port: 8889
 });

 pool.query('SELECT * from user', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

})

app.listen(3000, () => {
 console.log('server started on port 3000!');
});


