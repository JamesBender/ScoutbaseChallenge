const userResolverFactory = require('./userResovler');

const mockId = 99;
const mockToken = "I'm a token!";

const authenticationService = {
  createUser: jest.fn(({ name, password }) => {
    return { user: { id: mockId, name }, token: mockToken };
  }),
};

describe('when working with the user resolver', () => {
  const userResolver = userResolverFactory(authenticationService);

  describe('and creating a user', () => {
    let result;
    const username = 'user Name',
      password = '12345';

    beforeAll(async () => {
      result = await userResolver.createUser({ username, password });
    });

    it('should get back a user object', () => {
      expect(result.user).toBeTruthy();
    });

    it('the user object should have the correct id', () => {
      expect(result.user.id).toBe(mockId);
    });

    it('the user object should have the correct name', () => {
      expect(result.user.name).toBe(username);
    });

    it('the result object should have a token', () => {
      expect(result.token).toEqual(mockToken);
    });

    it('should call the user model once', () => {
      expect(authenticationService.createUser).toHaveBeenCalledTimes(1);
    });
  });
});
