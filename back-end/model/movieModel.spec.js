// Normally I would use mock data, but in this case the
// mock data and the data for the app are in a JSON file,
// so I'll just use it here.
const mockMovieData = require('./data').movies;
const movieModel = require('./movieModel')(mockMovieData);
const scoutbaseRatingFloor = 5,
  scoutbaseRatingCieling = 9;

describe('when working wih the movieModel', () => {
  describe('and getting a list of movies', () => {
    let result;

    describe('and the user is authenticated', () => {
      beforeAll(async () => {
        result = await movieModel.getMovies({ authenticatedUser: true });
      });

      it('should get a complete list of movies', () => {
        expect(result.length).toBe(mockMovieData.length);
      });

      it('each movie should have a randome scoutbase rating greater than or equal to 5.0', () => {
        result.forEach((movie) => {
          expect(movie.scoutbase_rating).toBeGreaterThanOrEqual(scoutbaseRatingFloor);
        });
      });

      it('each movie should have a randome scoutbase rating less than or equal to 9.0', () => {
        result.forEach((movie) => {
          expect(movie.scoutbase_rating).toBeLessThanOrEqual(scoutbaseRatingCieling);
        });
      });
    });

    describe('and the user is not authenticated', () => {
      beforeAll(async () => {
        result = await movieModel.getMovies({ authenticatedUser: false });
      });

      it('should get a complete list of movies', () => {
        expect(result.length).toBe(mockMovieData.length);
      });

      it('each movie should not have a random scoutbase ', () => {
        result.forEach((movie) => {
          expect(movie.scoutbase_rating).toBeUndefined();
        });
      });
    });
  });

  describe('and getting a specific movie', () => {
    let result;
    const expected = mockMovieData[0];

    describe('and the user is authenticated', () => {
      describe('and the id number is a number', () => {
        beforeAll(async () => {
          result = await movieModel.getMovie({ id: 1, authenticatedUser: true });
        });

        it('should get the expected movie', () => {
          expect(result.id).toEqual(expected.id);
        });

        it('movie should have a randome scoutbase rating greater than or equal to 5.0', () => {
          expect(result.scoutbase_rating).toBeGreaterThanOrEqual(scoutbaseRatingFloor);
        });

        it('each movie should have a randome scoutbase rating less than or equal to 9.0', () => {
          expect(result.scoutbase_rating).toBeLessThanOrEqual(scoutbaseRatingCieling);
        });
      });

      describe('and the id number is a string', () => {
        beforeAll(async () => {
          result = await movieModel.getMovie({ id: '1', authenticatedUser: true });
        });

        it('should get the expected movie', () => {
          expect(result.id).toEqual(expected.id);
        });

        it('movie should have a randome scoutbase rating greater than or equal to 5.0', () => {
          expect(result.scoutbase_rating).toBeGreaterThanOrEqual(scoutbaseRatingFloor);
        });

        it('each movie should have a randome scoutbase rating less than or equal to 9.0', () => {
          expect(result.scoutbase_rating).toBeLessThanOrEqual(scoutbaseRatingCieling);
        });
      });
    });

    describe('and the user is not authenticated', () => {
      describe('and the id number is a number', () => {
        beforeAll(async () => {
          result = await movieModel.getMovie({ id: 1, authenticatedUser: false });
        });

        it('should get the expected movie', () => {
          expect(result.id).toEqual(expected.id);
        });

        it('movie should not have a randome scoutbase rating ', () => {
          expect(result.scoutbase_rating).toBeUndefined();
        });
      });

      describe('and the id number is a string', () => {
        beforeAll(async () => {
          result = await movieModel.getMovie({ id: '1', authenticatedUser: false });
        });

        it('should get the expected movie', () => {
          expect(result.id).toEqual(expected.id);
        });

        it('movie should not have a random scoutbase rating', () => {
          expect(result.scoutbase_rating).toBeUndefined();
        });
      });
    });
  });
});
