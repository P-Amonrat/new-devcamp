var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
const pool = require("../model/database");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.post('/product', async function(req, res, next) {
  console.log(req.body);
  console.log(req.files);

  // const newpath = __dirname + "/public/upload-files/";
  // const file = req.body.image
  // const dotIndex = file.image.lastIndexOf('.');
  // const fileExtension = file.image.substr(dotIndex);

  // const randomFilename = (new Date()).getTime();
  // const filename = randomFilename + fileExtension;

  // file.mv(`${newpath}${filename}`, (err) => {
  //   if (err) {
  //     res.status(500).send({ message: "File upload failed" });
  //   }
  //   res.status(200).send({ message: 'success', filename: filename });
  // });

  // try {
  //   let [rows, fields] = await pool.query(`INSERT into stock (product_name, stock_left, category)
  //   VALUES ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}')`);
  //   if (rows.affectedRows == 1) {
  //     res.status(200).json(rows);
  //   } else {
  //     res.status(400).send("WRONG DATA!!");
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
});

module.exports = router;
