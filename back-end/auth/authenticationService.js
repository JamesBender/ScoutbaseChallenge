// I usually use a service like Auth0 or Okta or use
// Passport js for authentication. But, to keep this sample
// simple, assuming the right credentials are passed, I'm
// just creating a JWT here and returning it.
// I'm also not injecting my JWT provider from auth.js.
// In most clients I've worked for, we wanted the
// authentication/authorization library to be reusable
// across several apps, and we found it was easier to
// not inject certain things to make the package more
// portable and easier to use.
const jwt = require('jwt-simple');
const chalk = require('chalk');
const crypto = require('crypto');

module.exports = (userModel) => {
  // Normally I would user a service like Auth0 to
  // handle creating my JWT tokens, but to keep this
  // demo simple, I'm just using a string and keeping
  // it here.
  const secret = 'ScoutbaseSample';

  const generateSalt = (length) => {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  };

  const hashPassword = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const passwordHash = hash.digest('hex');

    return { salt, passwordHash };
  };

  const setupUser = async (userName, password) => {
    const passwordHash = hashPassword(password, generateSalt(16));
    const user = Object.assign({}, await userModel.createUser({ userName, passwordHash }));
    delete user.passwordHash;
    return user;
  };

  return {
    createUser: async ({ userName, password }) => {
      const user = await setupUser(userName, password);
      const token = jwt.encode(user, secret);
      return { user, token };
    },
  };
};
