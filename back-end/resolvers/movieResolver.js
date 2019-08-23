module.exports = function() {
  const sampleMovie = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      year: '2019',
      rating: '10.0',
      actors: [{ id: 1, name: 'Chris Hemmsworth', country: 'Austrailia', birthday: 'I dunno' }],
      directors: [{ id: 1, name: 'Joel Russo', country: 'USA', birthday: 'got me' }],
    },
  ];
  return {
    query: async () => {
      return await sampleMovie;
    },
  };
};
