var express = require('express');
var app = express()

var mysql = require('mysql2/promise');

app.get('/api/users', async (req, res, next) => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      password: 'root', // <== ระบุให้ถูกต้อง
      database: 'Devcamp', // <== ระบุ database ให้ถูกต้อง
      port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    });
    try {
      const users = await connection.query('SELECT * from usersData');
      res.json({
        users: users[0]
      });
    //   console.log(users)
      await connection.end();
    } catch (error) {
      res.json({ error: error });
    }
   });
   
app.listen(3000, () => {
    console.log("server started on port 3000!");
  });


   
   