var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  req.myVariable = 'forbidden'; // assume variable
  next();
})
async function myMiddleware(req, res, next) {
  if (req.myVariable == 'forbidden')
    req.body = "Access Denied";
  else
    next();
}
app.use(myMiddleware)
app.use(router.routes())
app.use(myMiddleware)
app.use(myMiddleware)


module.exports = router;
