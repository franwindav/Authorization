const USERS = require('./Users');
const isAuth = require('./Authorization').isAuthorization;
const entrance = require('./Authorization').entrance;
const regApp = require('express').Router();

const isDataCorrect = async data => {
   let errors = {};
   if (!USERS.isExistRole(data.role)) errors.inRole = 'Не выбранно или значение было изменено';
   if (data.login.length < 5 || data.login.includes(' ')) errors.inLogin = 'Логин должен быть длиной не менее 6 символов и без пробелов';
   if (data.password.length < 5 || data.password.includes(' ')) errors.inPassword = 'Пароль должен быть длиной не менее 6 символов и без пробелов';
   if (await USERS.findUser(data.login)) errors.inLogin = 'Логин уже существует';
   if (data.confirmPassword != data.password) {
      errors.inPassword = 'Пароли не совпадают';
      errors.inConfirmPassword = 'Пароли не совпадают';
   }
   return errors;
};

module.exports = app => {
   regApp.use('/registration', async (req, res, next) => {
      const isAuthorization = await isAuth(req.session);
      if (isAuthorization) return res.redirect('/');
      next();
   });

   regApp.get('/registration', (req, res) => {
      return app.render(req, res, '/registration', { headTitle: 'registration', roles: USERS.roles, errors: {} });
   });

   regApp.post('/registration', async (req, res) => {
      const data = {
         login: req.body.login,
         password: req.body.password,
         confirmPassword: req.body.confirmPassword,
         role: req.body.role
      };
      const errors = await isDataCorrect(data);
      if (Object.keys(errors).length == 0) {
         await USERS.addUser(data);
         await entrance(data.login, req.session);
         return res.send(JSON.stringify({ nextPage: '/' }));
      }
      return res.send(JSON.stringify({ errors }));
   });

   return regApp;
};
