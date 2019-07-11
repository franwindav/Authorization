const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const Modules = require('./Modules');

const sessionToken = Modules.randomString();
const app = express();
const port = 9000;
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: '.hbs',
   layoutsDir: path.join(__dirname, 'pages/layouts'),
});

app.use(express.static(path.join(__dirname + '/src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({ secret: sessionToken }));

app.post('/authorization', (req, res) => {
   const token = Modules.Authorization.authorization(
      req.body.login,
      req.body.password,
      req.session,
   );
   if (!token) {
      res.render('authorization', { error: true });
      return;
   }
   res.send('Вы авторизировались');
});
app.get('/authorization', (req, res) => {
   res.render('authorization', { error: false });
});

app.use(Modules.Authorization.isAuthorization.bind(Modules.Authorization));

app.get('/logout', (req, res) => {
   req.session.destroy();
   res.send('вы вышли из учетной записи');
});

app.get('*', (req, res) => {
   res.send('вы авторизованы');
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/pages'));

app.listen(port, err => {
   if (err) {
      return console.log('ERROR: ', err);
   }
   console.log(`> Ready on http://localhost:${port}`);
});
