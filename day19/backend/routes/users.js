var express = require('express');
var router = express.Router();
const pool  = require('../models/model');
var bodyParser = require('body-parser');
// const mysql = require('mysql2/promise');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/data', async function(req, res, next) {
try {
  let [rows, fields] = await pool.query(`INSERT INTO data(id_card, first_name, last_name, phone_number, email, address, tumbol, ampher, province, postal)
  VALUES('${req.body.id_card}', '${req.body.first_name}', '${req.body.last_name}','${req.body.phone_number}','${req.body.email}',
  '${req.body.address}','${req.body.tumbol}','${req.body.ampher}', '${req.body.province}', '${req.body.postal}')`);
  if (rows.affectedRows == 1) {
    res.status(200).json(rows)
  } else {
    res.status(400).send("WRONG DATA!!");
  }
}
catch(e) {
  console.log(e);
}
});


router.post('/experience', async function(req, res, next) {

  try {
    let [rows, fields] = await pool.query(`INSERT INTO experience(company_name, company_address, duration, position)
  VALUES('${req.body.company_name}', '${req.body.company_address}', '${req.body.duration}','${req.body.position}')`);
    if (rows.affectedRows == 1) {
    res.status(200).json(rows);
    }
    else {
      res.status(400).send("Something went wrong!!!")
    }
  }
  catch(e) {
    console.log(e);
  }
});

module.exports = router;
