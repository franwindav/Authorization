const randomString = require('./randomString');
const USERS = require('./Users');
const authApp = require('express').Router();

const isAuthorization = session => {
   const login = session.login;
   const token = session.token;
   return USERS.isExistUserToken(login, token);
};

const entrance = (login, session) => {
   const token = randomString();
   USERS.addNewToken(token, login);
   session.token = token;
   session.login = login;
};

module.exports.Main = app => {
   authApp.use('/authorization', (req, res, next) => {
      if (isAuthorization(req.session)) {
         res.redirect('/');
         return;
      }
      next();
   });

   authApp.get('/authorization', (req, res) => {
      app.render(req, res, '/authorization', {});
   });

   authApp.post('/authorization', (req, res) => {
      const { login, password } = req.body;
      const isExistUser = USERS.isExistUser(login, password);
      if (isExistUser) {
         const token = randomString();
         USERS.addNewToken(token, login);
         req.session.token = token;
         req.session.login = login;
         return app.render(req, res, '/');
         // return res.send(JSON.stringify({}));
      }
      return app.render(req, res, '/authorization');
      // return res.send(JSON.stringify({ error: 'Incorrect login or password' }));
   });

   // authApp.use((req, res, next) => {
   //    console.log(req.url);
   //    if (!isAuthorization(req.session)) {
   //       res.redirect('/authorization');
   //    } else next();
   // });

   return authApp;
};
module.exports.isAuthorization = isAuthorization;
module.exports.entrance = entrance;
