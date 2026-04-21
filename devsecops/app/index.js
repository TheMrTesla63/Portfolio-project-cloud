// devsecops/app/index.js

const http = require('http');
const url = require('url');

const PORT = 3000;

// --- demo: hardcoded secret (aan/uit zetten HIERONDER)


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queryObject = parsedUrl.query;

  const name = queryObject.name || "";

  // --- demo: simpele auth (uitcommenten indien nodig)
  /*
  const password = queryObject.password || "";
  const isAuthenticated = password === ADMIN_PASSWORD;
  */

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>DevSecOps Demo App</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
          }

          .container {
            max-width: 700px;
            margin: 60px auto;
            padding: 32px;
            background: #1e293b;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          h1 {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 32px;
          }

          p {
            margin-top: 0;
            margin-bottom: 24px;
            color: #cbd5e1;
          }

          form {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 24px;
          }

          input {
            flex: 1 1 220px;
            padding: 12px 14px;
            border: 1px solid #475569;
            border-radius: 8px;
            background: #0f172a;
            color: #e2e8f0;
            font-size: 15px;
          }

          input::placeholder {
            color: #94a3b8;
          }

          button {
            padding: 12px 18px;
            border: none;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            font-size: 15px;
            cursor: pointer;
          }

          button:hover {
            background: #1d4ed8;
          }

          .result {
            margin-top: 18px;
            padding: 18px;
            border-radius: 10px;
            background: #0f172a;
            border: 1px solid #334155;
          }

          .result h2 {
            margin: 0;
            font-size: 24px;
          }

          .tag {
            display: inline-block;
            margin-bottom: 14px;
            padding: 6px 10px;
            border-radius: 999px;
            background: #334155;
            color: #cbd5e1;
            font-size: 13px;
          }

          .status-admin {
            color: #22c55e;
            font-weight: bold;
            margin-top: 12px;
          }

          .status-guest {
            color: #f59e0b;
            font-weight: bold;
            margin-top: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="tag">Node.js DevSecOps Demo</div>
          <h1>DevSecOps Demo App v2!!!!</h1>
          <p>A simple demo application for build, test, security and deployment.</p>

          <form method="GET">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Submit</button>
          </form>

          <div class="result">
            <h2>Hello ${name || "guest"}</h2>

            ${
              // --- demo: AUTHENTICATIE (aan/uit zetten HIERONDER)
              /*
              isAuthenticated
                ? "<p class='status-admin'>Admin access granted</p>"
                : "<p class='status-guest'>Guest access only</p>"
              */
              ""
            }
          </div>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});