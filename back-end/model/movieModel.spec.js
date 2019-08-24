// Normally I would use mock data, but in this case the
// mock data and the data for the app are in a JSON file,
// so I'll just use it here.
const mockMovieData = require('./data').movies;
const movieModel = require('./movieModel')(mockMovieData);

describe('when working wih the movieModel', () => {
  describe('and getting a list of movies', () => {
    let result;

    beforeAll(async () => {
      result = await movieModel.getMovies();
    });

    it('should get a complete list of movies', () => {
      expect(result.length).toBe(mockMovieData.length);
    });

    it('should be the same list of movies', () => {
      expect(result).toEqual(mockMovieData);
    });
  });

  describe('and getting a specific movie', () => {
    let result;
    const expected = mockMovieData[0];

    describe('and the id number is a number', () => {
      beforeAll(async () => {
        result = await movieModel.getMovie(1);
      });

      it('should get the expected movie', () => {
        expect(result).toEqual(expected);
      });
    });

    describe('and the id number is a string', () => {
        beforeAll(async () => {
          result = await movieModel.getMovie('1');
        });
  
        it('should get the expected movie', () => {
          expect(result).toEqual(expected);
        });
      });
  });
});
