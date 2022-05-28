let mysql = require('mysql2');

const pool  = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'day19', 
    port: 8889, 
});

module.exports = pool;


