const express = require('express');
const app = express();
var usersRouter = require('./routes/users'); 

app.use(async function (req, res, next) {
  next();
}) 

app.use('/', usersRouter);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const information = {
    data : [req.myJSON],
    additionJSON : 
      { 
        userId: 1,
        thisTime: myDate.getDate() + '/' + myDate.getMonth() + '/' + myDate.getFullYear() + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()
      }
  }
  res.json(information);
}); 

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


module.exports = app;
