module.exports = function(movieList) {
  const movieModel = {
    getMovies: async () => {
      return movieList;
    },
    getMovie: async (id) => movieList.find((movie) => movie.id == id),
  };

  return movieModel;
};
