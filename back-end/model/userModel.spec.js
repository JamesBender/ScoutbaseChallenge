const userModelFactory = require('./userModel');
const chalk = require('chalk');

const userList = [];
const userModel = userModelFactory(userList);

describe('when using the user model', () => {
  describe('when creating a user', () => {
    let result,
      userName = 'test User',
      passwordHash = 'hash';
    const user = { userName, passwordHash };

    beforeAll(async () => {
      result = await userModel.createUser(user);
    });

    it('should return a valid user object', () => {
      expect(result).toBeTruthy();
    });

    it('should return a valid user object with the corrrect id', () => {
      expect(result.id).toBe(1);
    });

    it('should return a valid user object with the corrrect user name', () => {
      expect(result.userName).toBe(userName);
    });

    it('should return a valid user object with the corrrect password hash', () => {
      expect(result.passwordHash).toBe(passwordHash);
    });

    it('should add a user to the user store', () => {
      expect(userList.find((user) => user.id == result.id)).toBeTruthy();
    });
  });
});
