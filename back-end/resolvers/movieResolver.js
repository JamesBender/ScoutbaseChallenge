const chalk = require('chalk');

module.exports = function(movieModel, authenticationService) {
  return {
    getMovies: async ({ token }) => {
      const authenticatedUser = await authenticationService.authenticateUser(token);
      console.log(chalk.cyanBright(`User authentication: ${authenticatedUser}`));
      return await movieModel.getMovies({ authenticatedUser });
    },
    getMovie: async ({id, token}) => {
      const authenticatedUser = await authenticationService.authenticateUser(token);
      return await movieModel.getMovie({ id, authenticatedUser });
    },
  };
};
