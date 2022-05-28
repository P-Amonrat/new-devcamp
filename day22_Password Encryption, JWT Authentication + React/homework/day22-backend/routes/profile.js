var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/mycart', async function (req, res) {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized');
    } else {
      try {
        // remove 'Bearer' prefix to validate pure token value
        const decoded = jwt.verify(
          token.replace('Bearer', '').trim(),
          'codecamp_very_$secr3T!'
        );
        console.log(decoded);
        // query user-specific information with decoded as a JSON object
   
        res.send([
          { item: 'Product A selected' },
          { item: 'Product B selected' },
        ]);
      } catch (e) {
        res.status(401).send('Unauthorized');
      }
    }
   });

   module.exports = router;