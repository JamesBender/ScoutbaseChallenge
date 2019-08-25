const movieResolverFactory = require('./movieResolver');

const mockMovieModel = {
  getMovies: jest.fn(async () => [{}, {}, {}]),
  getMovie: jest.fn(async (id) => {
    return {};
  }),
};

const movieResolver = movieResolverFactory(mockMovieModel);

describe('when working with the movie resolver', () => {
  it('you should have a valid object', () => {
    expect(movieResolver).toBeTruthy();
  });

  describe('and getting a list of all movies', () => {
    let result;

    beforeAll(async () => {
      result = await movieResolver.getMovies();
    });

    it('should get a list of movies', () => {
      expect(Array.isArray(result)).toBeTruthy();
    });

    it('should have the correct number of movies in it', () => {
      expect(result.length).toBe(3);
    });

    it('should only call the model once', () => {
      expect(mockMovieModel.getMovies).toHaveBeenCalledTimes(1);
    });
  });

  describe('and getting a single movie by id', () => {
    let result;

    beforeAll(async () => {
      result = await movieResolver.getMovie(1);
    });

    it('should get a single movies', () => {
      expect(result).toBeTruthy();
    });

    it('should be a single object', () => {
      expect(typeof result).toBe('object');
    });

    it('should call the model once', () => {
      expect(mockMovieModel.getMovie).toHaveBeenCalledTimes(1);
    });
  });
});
