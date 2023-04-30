const express = require("express")
const fs = require("fs")
const mysql = require("mysql2")
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));



db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

app.get('/getUsers', function (req, res, next) {
let sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  });
})

app.get('/getUsers/:id', function (req, res) {
  const user=req.params.id;
  let sql = "SELECT * FROM users WHERE USER_ID="+user+";";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send (result);
    });
  });

app.get('/likes/:sender', function(req,res){
  const sender=req.params.sender;
  let sql="SELECT RECIEVER FROM likes WHERE SENDER="+sender+";";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });
});

app.post('/like/:sender/:reciever', function(req,res){
  const sender=req.params.sender;
  const reciever=req.params.reciever;
  let sql="INSERT INTO likes (SENDER, RECIEVER, LIKE_DATE) VALUES ("+sender+","+reciever+",current_date());";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})