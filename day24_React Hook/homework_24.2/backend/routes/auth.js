var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/token', async function (req, res) {

    const { username, password } = req.body;

    const pool = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'day24_reactHook',
        port: 8889
    })

    const result = await pool.query(
        `SELECT * FROM user WHERE username='${username}'`
    );

    if (result[0].length > 0) {
        const passwordMatch = await bcrypt.compare(password, result[0][0].password);
        if (passwordMatch) {
            const privateKey = 'codecamp_very_$secr3T!';
            const token = jwt.sign(
                {
                    id: result[0][0].id,
                    username: result[0][0].username,
                },
                privateKey,
                { expiresIn: '30000ms' }
            );
            res.json({ token: token });

        } else {
            res.status(401).send({ error: 'invalid credential' });
            return;
        }
    } else {
        res.status(401).send({ error: 'user not found' });
        return;
    }

})

module.exports = router;