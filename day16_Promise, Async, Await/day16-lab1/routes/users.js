var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      password: 'root', // <== ระบุให้ถูกต้อง
      database: 'Devcamp', // <== ระบุ database ให้ถูกต้อง
      port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })
      try {
        const user = await connection.query('SELECT * from user');
        const employee = await connection.query('SELECT * from Employee');
        res.json({
          users: user[0],
          employees: employee[0],
        });
        await connection.end();
      } catch (error) {
        res.json({ error: err });
      }
     
      // ปิด connection
    });
 
 

module.exports = router;
