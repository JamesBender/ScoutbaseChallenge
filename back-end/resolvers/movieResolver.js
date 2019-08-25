module.exports = function(movieModel) {
  return {
    getMovies: async () => await movieModel.getMovies(),
    getMovie: async (id) => await movieModel.getMovie(id),
  };
};
