const mysql = require('mysql2/promise')

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'Devcamp',
    port            : 8889
 });


 module.exports = pool;
