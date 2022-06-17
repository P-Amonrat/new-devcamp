const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const mysql = require('mysql2/promise');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project_ecommerce',
    port: 8889
});

app.post('/api/product', async function (req, res, next) {
    const [rows, fields] = await pool.query(`INSERT into stock (product_name, stock_left, category)
        VALUES ('${req.body.product_name}', '${req.body.stock_left}', '${req.body.category}')`)
    if (rows.affectedRows === 1) {
        res.send("Insert Data Successfully!!").json(rows);
    }
    else {
        res.status(400).send("WRONG DATA!!");
    }
});

app.put('/api/product/:id', async function (req, res, next) {
    const [rows, fields] = await pool.query(`UPDATE stock 
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