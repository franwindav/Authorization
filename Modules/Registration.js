class Registration {
   constructor(users, roles, url) {
      this.url = url;
      this.users = users;
      this.roles = roles;

      this.GET = (req, res) => {
         res.render(this.url, { headTitle: 'registration', roles: this.roles.roles });
      };

      this.POST = (req, res) => {
         console.log(req.body);
         const data = {
            login: req.body.login,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            role: req.body.role,
         };
         const ans = this.isDataCorrect(data);
         if (Object.keys(ans).length == 0) {
            this.users.addUser(data.login, data.password);
            this.roles.addRole(data.login, data.role);
            res.redirect('/authorization');
         } else {
            res.render(this.url, { error: ans, roles: this.roles.roles });
         }
      };

      this.main = (req, res, next) => {
         switch (req.method) {
            case 'GET': {
               this.GET(req, res);
               return;
            }
            case 'POST': {
               this.POST(req, res);
               return;
            }
            default: {
               next();
               return;
            }
         }
      };
   }

   isDataCorrect(data) {
      let ans = {};
      if (!this.roles.isExistRole(data.role)) ans.inRole = true;
      if (data.login.length < 5 || data.login.includes(' '))
         ans.inLogin = 'Логин должен быть длиной не менее 6 символов и без пробелов';
      if (data.password.length < 5 || data.password.includes(' '))
         ans.inPassword = 'Пароль должен быть длиной не менее 6 символов и без пробелов';
      if (this.users.findUser(data.login)) ans.inLogin = 'Логин уже существует';
      if (data.confirmPassword != data.password) {
         ans.inPassword = 'Пароли не совпадают';
         ans.inConfirmPassword = 'Пароли не совпадают';
      }
      return ans;
   }
}

module.exports = Registration;
