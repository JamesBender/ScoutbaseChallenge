module.exports = (authenticationService) => {
  return {
    createUser: async ({ username, password }) => {
      return await authenticationService.createUser({ name: username, password });
    },
    login: async ({ username, password }) => {
      return await authenticationService.login({ name: username, password });
    },
  };
};
