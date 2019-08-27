const movieModelFactory = require('./movieModel');
const userModelFactory = require('./userModel');

module.exports = function({movieData, userList}) {
  const movieModel = movieModelFactory(movieData);
  const userModel = userModelFactory(userList);
  return {
    movieModel,
    userModel,
  };
};
