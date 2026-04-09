

const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.end("Hello DevSecOps! v2 dit is een test");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
