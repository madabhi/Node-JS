const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "Venom@21"
})
module.exports = con;