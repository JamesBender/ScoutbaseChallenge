const movieData = require('./data.json').movies;

module.exports = function(movieData) {
  const movieModel = {
    getMovies: async () => movieData,
    getMovie: async (id) => movieData.find((movie) => movie.id == id),
  };

  return movieModel;
};
