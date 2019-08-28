const authenticationServiceFactory = require('./authenticationService');

const mockName = 'Bob',
  mockPassword = '12345',
  mockUserId = 1,
  mockGoodToken = 'good token',
  goodToken = 'Bearer good token',
  badToken = 'Bearer bad token';

const mockUserModel = {
  createUser: jest.fn(async ({ name, password }) => {
    return { name, id: mockUserId, passwordHash: `${password}-hash` };
  }),
  getUser: jest.fn(async (name) => {
    if (name === mockName) {
      return { name, id: 1, passwordHash: `${name}-hash` };
    }
    return undefined;
  }),
};

jest.mock('bcrypt', () => {
  return {
    hash: async (_data, _salt) => 'fakeToken',
    compare: async (password, hash) => {
      if (password === mockPassword && hash == `${mockName}-hash`) {
        // console.log(`Password: ${password} -- hash ${hash} returning true`)
        return true;
      }
      return false;
    },
  };
});

jest.mock('jwt-simple', () => {
  return {
    decode: async (token, secret) => {
      // console.log(`token: ${token} -- secret: ${secret}`);
      return token === mockGoodToken ? { userId: 1 } : {};
    },
    encode: async (_token, _secret) => {
      return 'thisIsAToken';
    },
  };
});

const authenticationService = authenticationServiceFactory(mockUserModel);

describe('when working with the authentication service', () => {
  describe('and setting up a new user', () => {
    let result;

    beforeAll(async () => {
      result = await authenticationService.createUser({ name: mockName, password: mockPassword });
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
      expect(result.user.name).toBe(mockName);
    });

    it('the user model should only be called once', () => {
      expect(mockUserModel.createUser).toHaveBeenCalledTimes(1);
    });
  });

  describe('and logging in an existing user', () => {
    describe('and the password is correct', () => {
      let result;

      beforeAll(async () => {
        result = await authenticationService.login({ name: mockName, password: mockPassword });
        // console.log(chalk.cyanBright(`auth server spec => result from login is ${JSON.stringify(result)}`));
      });

      it('should return a result with a user object', () => {
        expect(typeof result.user).toBe('object');
      });

      it('should return a result with a token', () => {
        expect(typeof result.token).not.toBeUndefined();
      });

      it('the user object should have an id', () => {
        expect(result.user.id).toBe(mockUserId);
      });

      it('the user object should have a name', () => {
        expect(result.user.name).toBe(mockName);
      });

      it('the user object should not have a password hase', () => {
        expect(result.user.passwordHash).toBeUndefined();
      });

      it('should only call the user model once', () => {
        expect(mockUserModel.getUser).toHaveBeenCalledTimes(1);
      });
    });

    describe('and the password is not correct', () => {
      it('should throw an error', async () => {
        try {
          await authenticationService.login({ name: mockName, password: 'not a password' });
        } catch (e) {
          expect(e.message).toBe('Invlaid username/password combination.');
        }
      });
    });
  });

  describe('and trying to log in with a user that does not exist', () => {
    it('should throw an error', async () => {
      try {
        await authenticationService.login({ name: 'not a user', password: mockPassword });
      } catch (e) {
        expect(e.message).toBe('Invlaid username/password combination.');
      }
    });
  });

  describe('and authenticating a user', () => {
    describe('and the user has a valid token', () => {
      let result;

      beforeAll(async () => {
        result = await authenticationService.authenticateUser(goodToken);
      });

      it('should authenticate the user', () => {
        expect(result).toBeTruthy();
      });
    });

    describe('and the user has an invalid token', () => {
      let result;

      beforeAll(async () => {
        result = await authenticationService.authenticateUser(badToken);
      });

      it('should not authenticate the user', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('and no token is supplied', () => {
      let result;

      beforeAll(async () => {
        result = await authenticationService.authenticateUser();
      });

      it('should not authenticate the user', () => {
        expect(result).toBeFalsy();
      });
    });
  });
});
