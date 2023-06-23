// Import the formCollectionData module
const formCollectionData = require("../../routes/formDataCollection");

// Access the exported data from formCollectionData
const { studentName, attendancePercentage } = formCollectionData;

// Display the data on the HTML page
const dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = `<p>Hello ${studentName}</p><p>Your Attendance is ${attendancePercentage}%</p>`;
