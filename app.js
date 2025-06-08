console.log('Web Serverni boshlash!');
const express = require('express');
const app = express();
const fs = require('fs');
const { isUtf8 } = require('buffer');


//Mongodb call

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log('Err:', err)
    } else {
        user = JSON.parse(data);
    }
})
//steps

// Step 1  Entry Code :   express ga kirib kelayotgan infolarga bogliq bolgan codes yoziladi;
app.use(express.static('public')); // har qanday browser dan expressga kirib kelayotgan client requests uchun 'public' folder ochiq! Only this  folder 
app.use(express.json());    //kirib kelayotgan JSON formatdagi data ni object ga o'giradi!
app.use(express.urlencoded({ extended: true }))   // html form orqali kiritilgan request/posts larni express server qabul qiladi! Unda ignore qiladi!


// Step 2  Session code

// Step 3 View code: BSSR(backend server side rendering) ;EJS orqali backendda client view(frontEnd) hosil qilamiz va clientga yubormix(html)
// npm install ejs
app.set("views", "views");
app.set("view engine", "ejs") // VIEW folderini o'qiydi;

// Step 4; Routes; Serverni ishga tushirish
app.post("/create-item", function (req, res) {
    console.log(req.body);
    res.json({ test: "success" })
});

app.get("/author", (req, res) => {
    res.render("author", { user: user })
})

app.get('/', function (req, res) {
    res.render('reja')
})

module.exports = app;