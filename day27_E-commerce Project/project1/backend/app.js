const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql2/promise');
const fileupload = require("express-fileupload");
const path = require('path')
var cors = require('cors')

app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'homework_day18',
    port: 8889
});

app.get('/api/product', async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM product_list`);
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

app.delete('/api/product/:id', async function (req, res, next) {
    const [rows, fields] = await pool.query(`DELETE FROM product_list WHERE id = '${req.params.id}' `)
    if (rows.affectedRows === 1) {
        res.status(200).send("Delete Successfully!!")
    }
    else {
        res.status(404).send('Not Found');
    }
});

app.post('/api/product', async function (req, res, next) {
    const [rows, fields] = await pool.query(`INSERT into product_list (product_name, stock_left, category)
        VALUES ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}')`)
    if (rows.affectedRows == 1) {
        res.status(200).json(rows);
    }
    else {
        res.status(400).send("WRONG DATA!!");
    }
});

// app.post('/api/product', async function (req, res, next) {
//     const [rows, fields] = await pool.query(`INSERT into product_list`)
// })

app.put('/api/product/:id', async function (req, res, next) {
    const [rows, fields] = await pool.query(`UPDATE product_list 
    SET product_name = '${req.body.product_name}', stock_left = '${req.body.stock_left}', category = '${req.body.category}'
    WHERE id= ${req.params.id}`)
    if (rows.affectedRows === 1) {

        res.status(200).send("Data Successfully Updated!!");
    }
    else {
        res.status(400).send("Wrong Data!!. Can't Update!!")
    }
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});



