const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

// app.get("/", (req, res) =>  {
//     res.send("hello world");
// });

//MySql

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydos",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const uname = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert =
    "INSERT INTO signupdata (uname, email, password) VALUES (?,?,?)";
  pool.query(sqlInsert, [uname, email, password], (err, result) => {
    console.log(err);
  });
});

app.get("/tasks", (req, res) => {
  const tasks_Query = "select * from tasks";
  pool.query(tasks_Query, (err, response) => {
    res.send(response);
  });
});

app.post("/addTask", (req, res) => {
  const input = req.body.input;
  const add_Query = "INSERT INTO tasks (tasks) VALUES (?)";
  pool.query(add_Query, [input], (err) => {
    console.log(err);
  });
});

app.delete("/deleteTask/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  console.log(id);
  const delete_Query = "delete from tasks where (id = (?))";
  pool.query(delete_Query, [id], (err) => {
    res.send("task has been deleted");
  });
});

app.get("/updateTask", (req, res) => {
  res.send("you can update task");
});

app.listen(3004, () => {
  console.log("Running on 3004");
});
