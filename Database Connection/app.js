const express = require("express");
const app = express();
const path = require("path");
const formhandler = require("./routes/formDataCollection");
const attendHandler = require("./routes/attendance");
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', "views");



app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"))
})
app.get("/selectedClass", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "teacher.html"));
})

app.post("/attendCheck", formhandler);
app.post("/selectedClassData", formhandler);
app.get("/public/attendance.html", attendHandler);
app.use((req, res) => {
    res.send("<h1>Page Not Found</h1><br><a href='/'>Go Back</a>")
})
app.listen(3000);
