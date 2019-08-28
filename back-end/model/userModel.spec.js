const userModelFactory = require('./userModel');

const findUserName = 'Find Me';
const userList = [{ name: findUserName }];
const userModel = userModelFactory(userList);

describe('when using the user model', () => {
  let result,
    userName = 'test User',
    passwordHash = 'hash';

  describe('when creating a user', () => {
    describe('and the user name is not already taken', () => {
      const user = { name: userName, passwordHash };

      beforeAll(async () => {
        result = await userModel.createUser(user);
      });

      it('should return a valid user object', () => {
        expect(result).toBeTruthy();
      });

      it('should return a valid user object with the corrrect id', () => {
        expect(result.id).toBe(userList.length);
      });

      it('should return a valid user object with the corrrect user name', () => {
        expect(result.name).toBe(userName);
      });

      it('should return a valid user object with the corrrect password hash', () => {
        expect(result.passwordHash).toBe(passwordHash);
      });

      it('should add a user to the user store', () => {
        expect(userList.find((user) => user.id == result.id)).toBeTruthy();
      });
    });
    
    describe('and the user name is already taken', () => {
      it('should throw an error', async () => {
        try {
          await userModel.createUser({ name: findUserName, passwordHash });
        } catch (e) {
          expect(e.message).toBe(`A user with the name ${findUserName} already exits. Please choose another name`);
        }
      });
    });
  });

  describe('when getting a user', () => {
    describe('and the user exits', () => {
      let result;

      beforeAll(async () => {
        result = await userModel.getUser(findUserName);
      });

      it('should return a valid user', () => {
        expect(typeof result).toBe('object');
      });

      it('should have the same name as the one that was searched for', () => {
        expect(result.name).toBe(findUserName);
      });
    });

    describe('and the user does not exit', () => {
      let result;

      beforeAll(async () => {
        result = await userModel.getUser('not there');
      });

      it('should return undefined', () => {
        expect(result).toBeUndefined();
      });
    });
  });
});
