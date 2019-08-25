const movieData = require('./data.json').movies;
const models = require('./models')(movieData);

describe('when working with the models', () => {
  it('you should have a valid collection of models', () => {
    expect(models).toBeTruthy();
  });
  it('it should have a valid movieModel object', () => {
    expect(models.movieModel).toBeTruthy();
  });
});
