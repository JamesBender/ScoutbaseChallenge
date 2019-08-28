// I've seen this done two ways; sometimes the individual resolvers are
// injected in the app/index.js files, sometimes they are injected here.
// I can see the benefits of both, but I feel like it's better to
// have the individual resolvers injected here. It keeps the app/index.js
// file cleaner, and abstracts away the detail of the individual resolvers
// to a place that makes more sense.

const movieResolverFactory = require('./movieResolver');
const userResolverFactory = require('./userResovler');

module.exports = function({ movieModel, authenticationService }) {
  const movieResolver = movieResolverFactory(movieModel, authenticationService);
  const userResolver = userResolverFactory(authenticationService);

  const resolvers = {
    Query: {
      movies: async (_parent, _args, context) => {
        return await movieResolver.getMovies({token: context.authScope});
      },
      movie: async (_parent, args) => await movieResolver.getMovie(args.id),
    },
    Mutation: {
      createUser: (_parent, args) => userResolver.createUser(args),
      login: (_parent, args, context) => {
        return userResolver.login(args);
      },
    },
  };
  return resolvers;
};
