require('dotenv/config');

const fs = require('fs');
const os = require('os');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const file = process.env.FILE || './posts';
const lineFormat = process.env.LINE_FORMAT || '%{url} - %{title}';

app.get('/', (req, res) => {
  fs.appendFile(file, os.EOL, onError);
  fs.appendFile(file, formattedLine(req.query), onError);

  res.send('OK');
});

const onError = (error) => error && console.error(error);

const formattedLine = (args, format = lineFormat) => (
  Object.keys(args).reduce((string, key) => string.replace(`%{${key}}`, args[key]), format)
);

app.listen(port, () => console.warn(`Listening on port ${port}`));
