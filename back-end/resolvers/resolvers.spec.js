const resolversFactory = require('./resolvers');

const mockModel = {
  movieModel: {},
};

const mockGetMovies = jest.fn(() => [{}, {}, {}]);
const mockGetMovie = jest.fn((id) => {
  return {};
});

jest.mock('./movieResolver', () => () => {
  return {
    getMovies: mockGetMovies,
    getMovie: mockGetMovie,
  };
});

const resolvers = resolversFactory(mockModel);

describe('when working with the resolvers', () => {
  it('should have a valid resolver object', () => {
    expect(typeof resolvers).toBe('object');
  });

  describe('and getting a list of movies', () => {
    let result;

    beforeAll(async () => {
      result = await resolvers.Query.movies();
    });

    it('should get back an array of movies', () => {
      expect(Array.isArray(result)).toBeTruthy();
    });

    it('should have the correct number of movies returned', () => {
      expect(result.length).toBe(3);
    });

    it('should only call the movieResolver once', () => {
      expect(mockGetMovies).toHaveBeenCalledTimes(1);
    });
  });

  describe('and getting a single movie', () => {
    let result;

    beforeAll(async () => {
      result = await resolvers.Query.movie(null, {id: 1});
    });

    it('should bring back a single object', () => {
      expect(typeof result).toBe('object');
    });

    it('should only call the movieResolver once', () => {
      expect(mockGetMovie).toHaveBeenCalledTimes(1);
    });
  });
});
