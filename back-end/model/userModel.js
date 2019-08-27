module.exports = function(userList) {
  return {
    createUser: async ({ userName, passwordHash }) => {
      const user = {
        id: userList.length + 1,
        userName,
        passwordHash,
      };
      userList.push(user);
      return user;
    },
  };
};
