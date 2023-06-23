const express = require("express");
const con = require("../connections/database");
const { path } = require("express/lib/application");
let attendancePercentage, studentName, attendance, totalAttend;
const app = express();

app.post("/attendCheck", (req, res) => {

    const roll = req.body.roll;
    console.log(roll);
    const qry = "SELECT `Days Present`, `Student Name`,`Total Days` FROM student WHERE idStudent=? ";
    con.query(qry, [roll], (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        if (result.length > 0) {
            attendance = result[0]['Days Present'];
            totalAttend = result[0]['Total Days']
            attendancePercentage = (attendance * 100) / totalAttend;
            attendancePercentage = attendancePercentage.toFixed(2);
            studentName = result[0]['Student Name'];
            console.log(attendancePercentage);
            res.render("attendance.ejs", { studentName, attendancePercentage });
            // res.redirect("../public/attendance.html");
            // res.send("<title>Attendance Details</title><h1>Hello " + studentName + "</h1><br><h1>Your Attendance is " + attendancePercentage + "%</h1><br><a href='/'>Go Back</a>");
            attendancePercentage = '';
            studentName = '';

        }
        else {
            res.render("noDatafound.ejs");

            // res.send("<title>Attendance Details</title><h1>No Data Found</h1><br><a href=''>Go Back</a>");

        }
    });
})

app.post("/selectedClassData", (req, res) => {
    const classSelect = req.body.class_select;
    console.log(classSelect);
    // res.send(classSelect);
    const qry = "SELECT `Student Name`,`idStudent` FROM student WHERE Class=? ";
    con.query(qry, [classSelect], (error, result) => {
        if (error) {
            throw error;
        }
        console.log(result);
        res.render("teacher.ejs", { students: result });

    })
})


module.exports = app;