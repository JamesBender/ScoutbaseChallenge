const chalk = require('chalk');

module.exports = function(movieModel, authenticationService) {
  return {
    getMovies: async ({ token }) => {
      const authenticatedUser = await authenticationService.authenticateUser(token);
      console.log(chalk.cyanBright(`User authentication: ${authenticatedUser}`));
      return await movieModel.getMovies();
    },
    getMovie: async (id) => await movieModel.getMovie(id),
  };
};
