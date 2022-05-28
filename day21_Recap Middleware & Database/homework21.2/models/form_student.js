var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise')
const pool = require('../config/database')

router.get('/form_student/:id', async function(req, res, next) {
    const [rows, fields] = await pool.query('SELECT * FROM students where id= "' + req.params.id + '"');
      res.status(200),
      // console.log('set variable')
      req.myJSON = rows[0];
      next();
  });
  
  module.exports = router;