const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app .use(bodyParser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "kozutak",
    }
);

app.get("/", (req, res) => {
    res.send("Fut a backend!")
})