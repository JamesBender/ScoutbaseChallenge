// I've seen this done two ways; sometimes the individual resolvers are
// injected in the app/index.js files, sometimes they are injected here.
// I can see the benefits of both, but I feel like it's better to 
// have the individual resolvers injected here. It keeps the app/index.js
// file cleaner, and abstracts away the detail of the individual resolvers
// to a place that makes more sense.

const movieResolverFactory = require('./movieResolver');

module.exports = function({ movieModel }) {
  const movieResolver = movieResolverFactory(movieModel);

  const resolvers = {
    Query: {
      movies: async () => await movieResolver.getMovies(),
      movie: async (_parent, args) => await movieResolver.getMovie(args.id),
    },
  };

  return resolvers;
};
