const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const Auth = require('./Modules/Authorization').Main;
const Reg = require('./Modules/Registration');
const randomString = require('./Modules/randomString');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sessionToken = randomString();
const port = 9000;

app.prepare()
   .then(() => {
      const server = express();

      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(expressSession({ secret: sessionToken }));

      // registration
      server.use(Reg(app));
      // authorization
      server.use(Auth(app));

      // logout
      server.get('/logout', (req, res) => {
         req.session.destroy();
         res.redirect('/authorization');
      });

      server.get('*', (req, res) => {
         // console.log(req.url);
         handle(req, res);
      });

      server.listen(port, err => {
         if (err) throw err;
         global.console.log(`> Ready on http://localhost:${port}`);
      });
   })
   .catch(ex => {
      global.console.error(ex.stack);
      process.exit(1);
   });
