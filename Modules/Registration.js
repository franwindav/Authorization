const USERS = require('./Users');
const isAuth = require('./Authorization').isAuthorization;
const entrance = require('./Authorization').entrance;
const regApp = require('express').Router();

const isDataCorrect = data => {
   let errors = {};
   if (!USERS.isExistRole(data.role)) errors.inRole = true;
   if (data.login.length < 5 || data.login.includes(' ')) errors.inLogin = 'Логин должен быть длиной не менее 6 символов и без пробелов';
   if (data.password.length < 5 || data.password.includes(' ')) errors.inPassword = 'Пароль должен быть длиной не менее 6 символов и без пробелов';
   if (USERS.findUser(data.login)) errors.inLogin = 'Логин уже существует';
   if (data.confirmPassword != data.password) {
      errors.inPassword = 'Пароли не совпадают';
      errors.inConfirmPassword = 'Пароли не совпадают';
   }
   return errors;
};

module.exports = app => {
   regApp.use('/registration', (req, res, next) => {
      const isAuthorization = isAuth(req.session);
      if (isAuthorization) {
         res.redirect('/');
         return;
      }
      next();
   });

   regApp.get('/registration', (req, res) => {
      return app.render(req, res, '/registration', { headTitle: 'registration', roles: USERS.roles });
   });

   regApp.post('/registration', (req, res) => {
      const data = {
         login: req.body.login,
         password: req.body.password,
         confirmPassword: req.body.confirmPassword,
         role: req.body.role
      };
      const errors = isDataCorrect(data);
      if (Object.keys(errors).length == 0) {
         USERS.addUser(data);
         entrance(data.login, req.session);
         app.render(req, res, '/');
      } else app.render(req, res, '/registration');
      // return res.send(JSON.stringify(errors));
   });

   return regApp;
};
