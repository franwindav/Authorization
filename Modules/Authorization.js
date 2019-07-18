const randomString = require('./randomString');
class Authorization {
   constructor(Users, url) {
      this.users = Users;
      this.url = url;
      this.POST = (req, res) => {
         const login = req.body.login;
         const password = req.body.password;
         const session = req.session;
         if (this.users.isExistUser(login, password)) {
            const token = randomString();
            this.users.addNewToken(token, login);
            session.token = token;
            session.login = login;
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
         if (req.url == `/${this.url}`) {
            switch (req.method) {
               case 'GET': {
                  this.GET(req, res);
                  return;
               }
               case 'POST': {
                  this.POST(req, res);
                  return;
               }
            }
         }
         const login = req.session.login;
         const token = req.session.token;
         if (!this.users.isExistUserToken(login, token)) {
            res.redirect(`/${this.url}`);
            return false;
         }
         next();
         return true;
      };
   }
}

module.exports = Authorization;
