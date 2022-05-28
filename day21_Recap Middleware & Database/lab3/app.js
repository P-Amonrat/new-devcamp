const express = require('express');
const app = express();
var usersRouter = require('./routes/users'); 

app.use(async function (req, res, next) {
  next();
}) 

app.use('/', usersRouter);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    thisTime: myDate.getDate() + '/' + myDate.getMonth(),
    data: res.myJSON,
    userId: 1
  }
  res.json(additionJSON);
}); // Stop and send Forbidden

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;
