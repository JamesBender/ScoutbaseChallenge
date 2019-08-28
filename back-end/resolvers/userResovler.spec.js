const userResolverFactory = require('./userResovler');

const mockId = 99,
  mockToken = "I'm a token!",
  mockUsername = 'user Name',
  mockPassword = '12345';

const authenticationService = {
  createUser: jest.fn(({ name, _password }) => {
    return { user: { id: mockId, name }, token: mockToken };
  }),
  login: jest.fn(({ name, password }) => {
    if (name === mockUsername && password === mockPassword) {
      return true;
    }
    return false;
  }),
};

describe('when working with the user resolver', () => {
  const userResolver = userResolverFactory(authenticationService);

  describe('and creating a user', () => {
    let result;

    beforeAll(async () => {
      result = await userResolver.createUser({ username: mockUsername, password: mockPassword });
    });

    it('should get back a user object', () => {
      expect(result.user).toBeTruthy();
    });

    it('the user object should have the correct id', () => {
      expect(result.user.id).toBe(mockId);
    });

    it('the user object should have the correct name', () => {
      expect(result.user.name).toBe(mockUsername);
    });

    it('the result object should have a token', () => {
      expect(result.token).toEqual(mockToken);
    });

    it('should call the user model once', () => {
      expect(authenticationService.createUser).toHaveBeenCalledTimes(1);
    });
  });

  describe('and logging a user in', () => {
    let result;

    describe('and the user has a valid set of credentials', () => {
      beforeAll(async () => {
        result = await userResolver.login({ username: mockUsername, password: mockPassword });
      });

      it('should log the user in', () => {
        expect(result).toBeTruthy();
      });
    });

    describe('and the user does not have a valid set of credentials', () => {
      beforeAll(async () => {
        result = await userResolver.login({ username: 'not a user', password: 'not a password' });
      });

      it('should log the user in', () => {
        expect(result).toBeFalsy();
      });
    });
  });
});
