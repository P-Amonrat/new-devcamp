const { Router } = require('express');
var express = require('express');
var router = express.Router();
const pool = require('../model/database');

router.delete('/product/:id', async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query(`DELETE FROM stock WHERE id = '${req.params.id}' `)
        if (rows.affectedRows === 1) {
            res.status(200).send("Delete Successfully!!")
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