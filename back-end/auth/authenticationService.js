const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

module.exports = (userModel) => {
  const secret = 'ScoutbaseSample';
  const loginErrorMessage = 'Invlaid username/password combination.';

  const createUserForRespone = (modelUser) => {
    const user = Object.assign({}, modelUser);
    delete user.passwordHash;
    return user;
  };
  const getExistingUser = async (name) => {
    const modelUser = await userModel.getUser(name);
    if (!modelUser) {
      throw new Error(loginErrorMessage);
    }
    return modelUser;
  };

  const validatePassword = async (password, passwordHash) => {
    const valid = await bcrypt.compare(password, passwordHash);
    if (!valid) {
      throw new Error(loginErrorMessage);
    }
    return valid;
  };

  return {
    createUser: async ({ name, password }) => {
      const passwordHash = await bcrypt.hash(password, 10);
      const modelUser = await userModel.createUser({ name, passwordHash });
      const user = createUserForRespone(modelUser);
      const token = jwt.encode({ userId: user.id }, secret);
      return { user, token };
    },
    login: async ({ name, password }) => {
      const modelUser = await getExistingUser(name);
      await validatePassword(password, modelUser.passwordHash);
      const user = createUserForRespone(modelUser);
      const token = jwt.encode({ userId: user.id }, secret);
      return { user, token };
    },
    authenticateUser: async (token) => {
      if (token) {
        token = token.replace('Bearer', '');
        token = token.replace(' ', '');
        const { userId } = await jwt.decode(token, secret);
        return userId ? true : false;
      }
      return false;
    },
  };
};
