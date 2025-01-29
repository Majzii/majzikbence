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
    res.send("Fut a backend!");
})

app.get("/regiok",(req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.post("/ujregio",(req, res) => {
    const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES (?, ?, ?)" ;
    const values = ['10', 'Sopron', 'Megye'];
    db.query(sql, values, (err, result) => {
        if(err) {
            console.error("Hibatortent:", err);
            
        }
        
    })
})

app.listen(3001, () => {
    console.log("Server is runningg on port 3001");
});