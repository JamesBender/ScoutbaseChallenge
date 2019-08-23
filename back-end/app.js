const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers/resolvers');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  // this is just to test connectivity until I get GraphQL stood up, then it goes away...
  const now = new Date();
  res.json({ message: `Hello World! at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` });
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(port, () => {
  debug(
    `Scoutbase Challenege is ${chalk.greenBright('up')} and listening at http://localhost:${port}${server.graphqlPath}`
  );
});
