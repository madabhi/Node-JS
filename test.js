//Abhinav Singh
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    res.setHeader('Content-Type', 'text/HTML');
    res.write("<html><body><h2>Abhinav Singh's Server Working Fine</h2></body></html>");
    res.end();
})

server.listen(3000);