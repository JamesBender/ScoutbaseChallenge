const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');

// Normally, I would inject DB connection information based
// on configuration/environment. But, this is a sample, so for
// the sake of simplicity I am using a JSON file/empty array, which I'm
// injecting here instead.
const userList = [];
const movieData = require('./model/data.json').movies;
const model = require('./model/models')({ movieData, userList });
const authenticationService = require('./auth/authenticationService')(model.userModel);

const resolvers = require('./resolvers/resolvers')({ movieModel: model.movieModel, authenticationService });

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get('/', (_req, res) => {
  // redirects someone who goes to the main address to the GraphQL endpoint.
  res.redirect('/graphql');
});

const server = new ApolloServer({
  cors: {
    origin: '*',
  },
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authScope: req.headers.authorization,
  }),
});

server.applyMiddleware({ app });

app.listen(port, () => {
  debug(
    `Scoutbase Challenege is ${chalk.greenBright('up')} and listening at http://localhost:${port}${server.graphqlPath}`
  );
});
