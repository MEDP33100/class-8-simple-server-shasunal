//impot http library
const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

//set host name and the port
// 127.0.0.1 = localhost
//port can be 3000, 3001, 8000, 8001...

const hostname = '127.0.0.1';
const port = 3000;

// create new server with createServer()
const server = createServer(function (req, res) { // request, response
   
    // use fs to get index.html and return it in the response
    const filePath = path.join(__dirname, 'index.html')
    fs.readFile(filePath, 'utf-8', function (error, data){
        if(error){
            console.log('could not find file');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File not found.');
            return;
        }
        res.statusCode = 200;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
    
}).listen(port, hostname, function() {
    console.log('server is running', port)
});
