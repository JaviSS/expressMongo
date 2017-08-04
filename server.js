const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require("mongodb").MongoClient;

let db;

mongoClient.connect("ds129593.mlab.com:29593/mlabdb", (err, database) => {
    if (err) return console.log("error al conectar db");
    db = database;
    app.listen(3000, () => {
        console.log("listening on port 3000");
    });
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
});

app.post('/citas', (req, res) => {
    console.log(req.body)
});