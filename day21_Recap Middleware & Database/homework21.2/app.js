const express = require('express');
const app = express();
var userRouter = require('./models/form_user');
var studentRouter = require('./models/form_student');

app.use(async function (req, res, next) {
  next();
}) 

app.use('/', userRouter);
app.use('/', studentRouter);

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
