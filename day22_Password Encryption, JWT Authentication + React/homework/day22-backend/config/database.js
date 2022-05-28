const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'day22_passwordEncryption',
    port     : 8889
});

module.export = pool;