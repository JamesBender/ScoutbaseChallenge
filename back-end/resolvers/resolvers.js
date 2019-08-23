const movieResolver = require('./movieResolver')();

const resolvers = {
  Query: {
    movies: async () => await movieResolver.query()
  },
};

module.exports = resolvers;
