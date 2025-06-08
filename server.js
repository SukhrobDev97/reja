const http = require('http');

const mongodb = require('mongodb')
let db;
const connectionString = "mongodb+srv://sukhrobdev97:Sukhrob571@cluster0.xpyclup.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("Error on conection");
    else {
        console.log("MongoDb connected successfully");
        const app = require('./app');
        module.exports = client;
        //pass to server
        const server = http.createServer(app);
        let PORT = 3001;
        server.listen(PORT, function () {
            console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`)
        })
    }

})

