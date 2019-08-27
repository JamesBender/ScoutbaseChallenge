const resolversFactory = require('./resolvers');

const mockModel = {
  movieModel: {},
};

const mockGetMovies = jest.fn(() => [{}, {}, {}]);
const mockGetMovie = jest.fn((id) => {
  return {};
});
const mockCreateUser = jest.fn((args) => {
  return {};
});

jest.mock('./movieResolver', () => () => {
  return {
    getMovies: mockGetMovies,
    getMovie: mockGetMovie,
  };
});

jest.mock('./userResovler', () => () => {
  return {
    createUser: mockCreateUser,
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
      result = await resolvers.Query.movie(null, { id: 1 });
    });

    it('should bring back a single object', () => {
      expect(typeof result).toBe('object');
    });

    it('should only call the movieResolver once', () => {
      expect(mockGetMovie).toHaveBeenCalledTimes(1);
    });
  });

  describe('and creating a new user', () => {
    let result,
      username = 'test user',
      password = '12345';

    beforeAll(async () => {
      result = await resolvers.Mutation.createUser({ username, password });
    });

    it('should return an obect', () => {
      expect(typeof result).toBe('object');
    });

    it('should only call the user resolver once', () => {
      expect(mockCreateUser).toHaveBeenCalledTimes(1);
    });
  });
});
