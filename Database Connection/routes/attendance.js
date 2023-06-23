const express = require("express");
const path = require("path");
const app = express();
app.get("/public/attendance.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "attendance.html"));
})
module.exports = app;
