console.log('Web Serverni boshlash!');
const express = require('express');
const app = express();
const fs = require('fs');
const { isUtf8 } = require('buffer');


//Mongodb call
const db = require("./server").db();
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log('Err:', err)
    } else {
        user = JSON.parse(data);
    }
})
//steps

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Step 2  Session code


app.set("views", "views");
app.set("view engine", "ejs")

// Step 4; Routes; Serverni ishga tushirish
app.post("/create-item", function (req, res) {
    console.log("user entered / create-item ")
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end('smth went wrong')
        } else {
            res.end('successfully added')
        }
    })
});

app.get("/author", (req, res) => {
    res.render("author", { user: user })
})

app.get('/', function (req, res) {
    console.log("user entered /")
    db.collection('plans')
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err)
                res.end('smth went wrong')
            } else {
                console.log(data)
                res.render('reja', { items: data })
            }
        })
})

module.exports = app;