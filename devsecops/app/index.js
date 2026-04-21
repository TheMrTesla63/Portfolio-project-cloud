const http = require('http');
const url = require('url');

const PORT = 3000;

// no hardcoded secret
// const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queryObject = parsedUrl.query;

  const name = queryObject.name || "";

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <body>
        <h1>DevSecOps Demo App v2</h1>

        <form method="GET">
          <input type="text" name="name" placeholder="Enter your name">
          <input type="password" name="password" placeholder="Password">
          <button type="submit">Submit</button>
        </form>

        <h2>Hello ${name}</h2>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});