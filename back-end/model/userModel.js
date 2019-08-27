module.exports = function(userList) {
  return {
    createUser: async ({ name, passwordHash }) => {
      const user = {
        id: userList.length + 1,
        name,
        passwordHash,
      };
      userList.push(user);
      return user;
    },
  };
};
