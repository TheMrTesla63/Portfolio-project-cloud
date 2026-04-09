const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello DevSecOps!");
});

server.listen(3000);
