console.log('Web Serverni boshlash!');
const express = require('express'); // npm install express
const app = express(); // express ning app  objectini bizga yuboradi; va u orqali biz express server quramz
const http = require('http');
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
app.get("/gift", function (req, res) {
    res.end(`<h1>Gift Page</h1>`)
});

app.get("/hello", function (req, res) {
    res.end(`<h1>Hello World </h1>`)
});

//pass to server
const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`)
})