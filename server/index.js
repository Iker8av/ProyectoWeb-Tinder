const express = require("express")
const fs = require("fs")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "WEB",
});

db.connect();

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

app.get('/getUsers', function (req, res, next) {
let sql = "SELECT * FROM USERS";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})