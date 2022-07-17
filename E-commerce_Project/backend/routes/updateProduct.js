var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
const pool = require("../model/database");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.put('/product/:id', async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query(`UPDATE stock 
        SET product_name = '${req.body.product_name}', stock_left = '${req.body.stock_left}', category = '${req.body.category}'
        WHERE id= ${req.params.id}`)
        if (rows.affectedRows === 1) {
    
            res.status(200).send("Data Successfully Updated!!");
        }
        else {
            res.status(400).send("Wrong Data!!. Can't Update!!")
        }
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;