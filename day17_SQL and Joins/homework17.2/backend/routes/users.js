var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      password: 'root', // <== ระบุให้ถูกต้อง
      database: 'day17_joint', // <== ระบุ database ให้ถูกต้อง
      port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })
      try {
        const count = await connection.query('SELECT courses_name, count(*) from students join courses on courses.id = students.id group by courses_name');
        res.json({
          list: count[0],
        });
        await connection.end();
      } catch (error) {
        res.json({ error: error });
      }
     
      // ปิด connection
    });
 
 

module.exports = router;