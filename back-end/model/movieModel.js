module.exports = function(movieList) {
  const getRandomRating = (movie) => {
    const min = 5,
      max = 9;
    let rating = Math.random() * (+max - +min) + +min;
    rating = Math.round(rating * 100) / 100;
    movie.scoutbase_rating = rating;
    return movie;
  };

  const movieModel = {
    getMovies: async () => {
      return movieList.map((movie) => getRandomRating(movie));
    },
    getMovie: async (id) => {
      let movie = movieList.find((movie) => movie.id == id);
      movie = getRandomRating(movie);
      return movie;
    },
  };

  return movieModel;
};
