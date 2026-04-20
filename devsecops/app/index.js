const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || "";

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <body>
        <h1>DevSecOps Demo App</h1>

        <form method="GET">
          <input type="text" name="name" placeholder="Enter your name">
          <button type="submit">Submit</button>
        </form>

        <h2>Hello ${name}</h2>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});