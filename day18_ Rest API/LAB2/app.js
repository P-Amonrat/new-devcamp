const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
   let firstname = req.body.firstname;
   let lastname =req.body.lastname;
//    console.log(name);
   if(firstname == undefined){
       res.status(404).send('Not Found');
   }else{
       res.status(200).send('OK.');
   }

  
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});



