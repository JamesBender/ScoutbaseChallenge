module.exports = function(userList) {
  const findUser = (userName) => {
    return userList.find((user) => user.name === userName);
  };

  return {
    createUser: async ({ name, passwordHash }) => {
      if (findUser(name)) {
        throw new Error(`A user with the name ${name} already exits. Please choose another name`);
      }
      const user = {
        id: userList.length + 1,
        name,
        passwordHash,
      };

      userList.push(user);

      return user;
    },
    getUser: async (userName) => {
      return findUser(userName);
    },
  };
};
