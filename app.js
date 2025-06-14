console.log('Web Serverni boshlash!');
const express = require('express');
const app = express();
const fs = require('fs');
const { isUtf8 } = require('buffer');

const mongodb = require('mongodb');
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
app.set("view engine", "ejs") // VIEW folderini o'qiydi;

// Step 4; Routes; Serverni ishga tushirish
app.post("/create-item", function (req, res) {
    console.log("user entered / create-item ")
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0])
    })
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    console.log("Deleting id:", id);
    db.collection('plans').deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" })
        }
    )
});

app.post('/edit-item', (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection('plans').findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: 'success' })
        }
    );

});

app.post('/delete-all', (req, res) => {
    if (req.body.delete_all) {
        db.collection('plans').deleteMany({}, function () {
            res.json({ state: 'all plans are deleted' })
        })
    }
})

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