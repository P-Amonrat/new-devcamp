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
    database: 'homework_day18',
    port: 8889
});

app.get('/api/product/:id', async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM product_list WHERE id= ${req.params.id}`);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
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
    const [rows, fields] = await pool.query(`DELETE FROM product_list WHERE id= '${req.params.id}'`)
    if (rows.affectedRows === 1) {
        res.status(200).send("Delete Successfully!!")
    }
    else {
        res.status(404).send('Not Found');
    }
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});



