const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql2/promise');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', async function (req, res, next) {

    let user = {}
    user.name = req.body.name;
    user.movie = req.body.movie;
    console.log(('INSERT into users'))

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Devcamp',
        port: 8889
    });

    try {
        const data = await connection.query(` INSERT INTO user (firstname, movie,salary,address) VALUES ("${req.body.name}","${req.body.movie}",1321332,"bangkok")`)
        connection.end();

        res.status(200).json({
            code: 1,
            message: 'OK',
            data: user
        });
    } catch (error) {
        console.log(error);
    }
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

