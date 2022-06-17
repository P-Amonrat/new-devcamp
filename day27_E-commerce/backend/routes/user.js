var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project_ecommerce',
    port: 8889
  });

  const { username, password, firstname, lastname, email, phone_number } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.execute(
    `INSERT INTO user (username, password, firstname, lastname, email, phone_number) VALUES ('${username}','${hashedPassword}', 
    '${firstname}', '${lastname}', '${email}', '${phone_number}')`
  );

  res.send({ id: result[0].insertId });
})

module.exports = router;