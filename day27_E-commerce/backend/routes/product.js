var express = require('express');
var router = express.Router();
const pool = require('../model/database');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
      const [rows, fields] = await pool.query(`SELECT * FROM stock`);
      if (rows.length > 0) {
          res.status(200).json(rows);
      }
      else {
          res.status(404).send('Not Found');
      }
  }
  catch (e) {
      console.log(e);
  }
});

module.exports = router;
