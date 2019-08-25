const movieModelFactory = require('./movieModel');

module.exports = function(movieData) {
  const movieModel = movieModelFactory(movieData);
  return {
    movieModel: movieModel,
  };
};
