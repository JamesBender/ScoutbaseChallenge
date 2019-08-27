const authenticationServiceFactory = require('./authenticationService');

const mockUserModel = {
  createUser: jest.fn(({ userName, password }) => {
    return { userName, id: 1, passwordHash: `${password}-hash` };
  }),
};

const authenticationService = authenticationServiceFactory(mockUserModel);

describe('when working with the authentication service', () => {
  describe('and setting up a new user', () => {
    let result,
      userName = 'auth svc test user',
      password = '12345';

    beforeAll(async () => {
      result = await authenticationService.createUser({ userName, password });
    });

    it('should return a valid token', () => {
      expect(result.token).toBeTruthy();
    });

    it('should return a valid user object', () => {
      expect(result.user).toBeTruthy();
    });

    it('user object should have a valid id', () => {
      expect(result.user.id).toBe(1);
    });

    it('user object should have a valid username', () => {
      expect(result.user.userName).toBe(userName);
    });

    it('the user model should only be called once', () => {
      expect(mockUserModel.createUser).toHaveBeenCalledTimes(1);
    });
  });
});
