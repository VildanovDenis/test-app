const { users } = require("./users.json");

export const auth = ({ login, password }) =>
  new Promise(resolve => {
    setTimeout(() => {
      const isUserExist = users.some(item => {
        const isUserValid =
          item.login.toLowerCase() === login.toLowerCase() &&
          item.password === password
            ? true
            : false;
        return isUserValid;
      });
      resolve({ ok: isUserExist });
    }, 500);
  });
