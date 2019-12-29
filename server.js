const htm = require('htm/preact');
const express = require('express');
const render = require('preact-render-to-string');
const App = require('./src/index');

// basic HTTP server via express:
const app = express();
app.listen(8080);

// on each request, render and return a component:
app.get('/', (req, res) => {
	let html = render(htm`<${App} />`);
	// send it back wrapped up as an HTML5 document:
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script defer src="/src/index.js" type='module'></script>
      </head>
      <body>${html}</body>
    </html>
  `);
});