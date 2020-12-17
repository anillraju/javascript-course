var anil = {};

anil.http = require("http");
anil.fs = require("fs");

anil.http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type' : 'text/html' });
    response.end(anil.fs.readFileSync("../jquery/explore.html"));
}).listen(1337, '127.0.0.1');
