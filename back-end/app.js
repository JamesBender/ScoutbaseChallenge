const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  // this is just to test connectivity until I get GraphQL stood up, then it goes away...
  const now = new Date();
  res.json({ message: `Hello World! at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` });
});

app.listen(port, () =>
  debug(`Scoutbase Challnege is ${chalk.greenBright('up')} and listening on port ${chalk.whiteBright(port)}`)
);
