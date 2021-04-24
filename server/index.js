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
    host : 'localhost',
    user : 'root',
    password: 'password',
    database : 'mydos'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));


app.post("/insert", (req, res) => {


    const uname = req.body.username;
    const email = req.body.email;
    const password = req.body.password;


                const sqlInsert = "INSERT INTO signupdata (uname, email, password) VALUES (?,?,?)";
                pool.query(sqlInsert, [uname, email, password], (err, result) => {
                    console.log(err);
                });
            


});

app.post("/login", (req, res) => {


    const uname = req.body.usernamel;
    const password = req.body.passwordl;

    const sqllogin = "SELECT * FROM signupdata WHERE uname = ? AND password = ?";
    pool.query(sqllogin, [uname, password], (err, result) => {
        if(err){
        res.send({err: err});
        }
        if(result.length > 0){
             res.send(result);
        }
        else{
             res.send({message: "Wrong Username/ Password combination !"});
        }
    });
});

app.listen(3004, () => {
    console.log('Running on 3004');
});
