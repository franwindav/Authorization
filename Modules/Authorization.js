const randomString = require('./randomString');
const USERS = require('./Users');
const authApp = require('express').Router();

const isAuthorization = async session => {
   const login = session.login;
   const token = session.token;
   return USERS.isExistUserToken(login, token);
};

const entrance = async (login, session) => {
   const token = randomString();
   await USERS.addNewToken(token, login);
   session.token = token;
   session.login = login;
};

module.exports.Main = app => {
   authApp.use('/authorization', async (req, res, next) => {
      if (await isAuthorization(req.session)) return res.redirect('/');
      next();
   });

   authApp.get('/authorization', (req, res) => {
      return app.render(req, res, '/authorization', {});
   });

   authApp.post('/authorization', async (req, res) => {
      const { login, password } = req.body;
      const isExistUser = await USERS.isExistUser(login, password);
      if (isExistUser) {
         const token = randomString();
         await USERS.addNewToken(token, login);
         req.session.token = token;
         req.session.login = login;
         return res.send(JSON.stringify({ nextPage: '/' }));
      }
      return res.send(JSON.stringify({ error: 'Incorrect login or password' }));
   });

   authApp.use(async (req, res, next) => {
      if (!req.url.includes('_next') && !(await isAuthorization(req.session))) {
         res.redirect('/authorization');
      } else next();
   });

   return authApp;
};
module.exports.isAuthorization = isAuthorization;
module.exports.entrance = entrance;
