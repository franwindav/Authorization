const randomString = require('./randomString');
class Authorization {
   constructor(Users, url) {
      this.users = Users;
      this.url = url;
      this.POST = (req, res) => {
         const login = req.body.login;
         const password = req.body.password;
         if (this.users.isExistUser(login, password)) {
            this.entrance(this.users, login, req.session);
            res.redirect('/');
            return;
         }
         res.render(this.url, { error: true, headTitle: 'authorization' });
         return;
      };

      this.GET = (req, res) => {
         res.render(this.url, { error: false, headTitle: 'authorization' });
      };

      this.main = (req, res, next) => {
         const isAuthorization = this.isAuthorization(req.session);

         if (req.url == `/${this.url}`) {
            if (!isAuthorization) {
               switch (req.method) {
                  case 'GET': {
                     this.GET(req, res);
                     break;
                  }
                  case 'POST': {
                     this.POST(req, res);
                     break;
                  }
               }
            } else {
               res.redirect('/');
            }
            return;
         }
         if (!isAuthorization) {
            res.redirect(`/${this.url}`);
            return false;
         }
         next();
         return true;
      };
   }
   isAuthorization(session) {
      const login = session.login;
      const token = session.token;
      return this.users.isExistUserToken(login, token);
   }
   entrance(users, login, session) {
      const token = randomString();
      users.addNewToken(token, login);
      session.token = token;
      session.login = login;
   }
}

module.exports = Authorization;
