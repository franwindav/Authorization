const randomString = require('./randomString');
class Authorization {
   constructor(Users) {
      this.users = Users;
   }

   authorization(login, password, session) {
      if (this.users.isExistUser(login, password)) {
         const token = randomString();
         this.users.addNewToken(token, login);
         session.token = token;
         session.login = login;
         return token;
      }
      return false;
   }

   isAuthorization(req, res, next) {
      const login = req.session.login;
      const token = req.session.token;
      if (!this.users.isExistUserToken(login, token)) {
         res.redirect('/authorization');
         return false;
      }
      next();
      return true;
   }
}

module.exports = Authorization;
