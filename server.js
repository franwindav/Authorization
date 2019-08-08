const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const Auth = require('./Modules/Authorization').Main;
const Reg = require('./Modules/Registration');
const randomString = require('./Modules/randomString');
const Qual = require('./Modules/Qualification');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sessionToken = randomString();
const port = 9000;

app.prepare()
   .then(() => {
      const server = express();
      const store = new MongoStore({
         url: 'mongodb://localhost:9005/AuthSession',
         collection: 'sessions',
         ttl: 1 * 24 * 60 * 60
      });

      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(session({ secret: '123123123', store: store, resave: false }));

      // registration
      server.use(Reg(app));
      // authorization
      server.use(Auth(app));

      server.use(Qual(app));

      // logout
      server.get('/logout', async (req, res) => {
         await req.session.destroy();
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
