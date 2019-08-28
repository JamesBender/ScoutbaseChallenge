module.exports = function(movieList) {
  const getRandomRating = (movie) => {
    const min = 5,
      max = 9;
    let rating = Math.random() * (+max - +min) + +min;
    rating = Math.round(rating * 100) / 100;
    return Object.assign({ scoutbase_rating: rating }, movie);
  };

  const movieModel = {
    getMovies: async ({ authenticatedUser }) => {
      if (authenticatedUser) {
        return movieList.map((movie) => getRandomRating(movie));
      }
      return movieList;
    },
    getMovie: async ({ id, authenticatedUser }) => {
      let movie = movieList.find((movie) => movie.id == id);
      return authenticatedUser ? getRandomRating(movie) : movie;
    },
  };

  return movieModel;
};
