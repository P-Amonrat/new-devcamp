var express = require('express');
var router = express.Router();
// const pool = require('../config/database')
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    password: 'root', // <== ระบุให้ถูกต้อง
    database: 'day22_passwordEncryption', // <== ระบุ database ให้ถูกต้อง
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });

  const { username, password, firstname, lastname, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await connection.execute(
    `INSERT INTO user_form (username, password, firstname, lastname, email) VALUES ('${username}','${hashedPassword}', 
    '${firstname}', '${lastname}', '${email}')`
  );

  await connection.end();

  res.send({ id: result[0].insertId });
})

module.exports = router;
