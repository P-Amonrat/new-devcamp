const express = require('express');
const app = express();
const fileupload = require("express-fileupload");
const path = require('path')
var cors = require('cors')
const port = 3000;

app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(fileupload());

app.post("/upload", (req, res) => {
    const newpath = __dirname + "/public/upload-files/";
    const file = req.files.file;
    const filename = file.name;
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "File upload failed", code: 500 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
