const userResolverFactory = require('./userResovler');

const mockCreateUser = jest.fn(({ userName, passwordHash }) => {
  id: 1, userName, passwordHash;
});

const userModel = {
  createUser: mockCreateUser,
};
const authenticationService = {

}

describe('when working with the user resolver', () => {
  const userResolver = userResolverFactory(userModel, authenticationService);

  describe('and creating a user', () => {
    let result;
    const userName = 'userName',
      password = '12345';

    beforeAll(async () => {
      result = userResolver.createUser({ userName, password });
    });

    it('should get back a user id', () => {
      expect(result).toBe(1);
    });

    // it('should call the user model once', () => {
    //   expect(mockCreateUser).toHaveBeenCalledTimes(1);
    // });
  });
});
