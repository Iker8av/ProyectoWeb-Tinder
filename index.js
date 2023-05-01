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


//RETURNS DATA FROM ALL THE USERS
app.get('/getUsers', function (req, res, next) {
let sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  });
})

// RETURNS DATA FROM SPECIFIC USER, THE REQUEST NEEDS AN ID
app.get('/getUsers/:id', function (req, res) {
  const user=req.params.id;
  let sql = "SELECT * FROM users WHERE USER_ID="+user+";";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send (result);
    });
  });

// RETURNS ALL LIKED PROFILES DEPENDING FROM THE CURRENT USER
app.get('/likes/:sender', function(req,res){
  const sender=req.params.sender;
  let sql="SELECT RECIEVER FROM likes WHERE SENDER="+sender+";";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });
});

// GENERATES A NEW LIKE IN THE DATABASE
app.post('/like/:sender/:reciever', function(req,res){
  const sender=req.params.sender;
  const reciever=req.params.reciever;
  let sql="INSERT INTO likes (SENDER, RECIEVER, LIKE_DATE) VALUES ("+sender+","+reciever+",current_date());";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });
})

// DELETES A LIKE
app.delete('/delete/like/:sender/:reciever', function(req,res){
  const sender=req.params.sender;
  const reciever=req.params.reciever;

  let sql="DELETE FROM likes WHERE SENDER='"+sender+"' AND RECIEVER='"+reciever+"';";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });
})


// UPDATES THE USER INFORMATION
app.patch('/update', function(req,res){
  const id=req.body.id;
  const name=req.body.name;
  const age=req.body.age;
  const company=req.body.company;
  const looking=req.body.looking;
  const mess=req.body.mess;

  let sql="UPDATE users SET USER_NAME='"+name+"', COMPANY='"+company+"', AGE="+age+", LOOKING_FOR='"+looking+"', MESSAGE='"+mess+"' WHERE USER_ID="+id+";";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send (result);
  });

})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})