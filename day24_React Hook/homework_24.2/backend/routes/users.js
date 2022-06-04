var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
  const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'day24_reactHook',
    port: 8889
  })

  const { username, password } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

  const result = await pool.execute(
    `INSERT INTO user (username,password) VALUES ('${username}','${hashedPassword}')`
  ); // insert ข้อมูล


  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
});



module.exports = router;
