const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.header);
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write("<html><title>Enter Data</title><body>");
        res.write("<form action='/message' method='POST' ><input type='text' name= 'message' > <button type='submit'>Send</button></form>");
        res.write("</body></html>");
        return res.end();

    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Abhinav Singh');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()

    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<html><title>Web Server</title><body>Abhinav's Server </body></html>");
    res.end();

});

server.listen(3000);