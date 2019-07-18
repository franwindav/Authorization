const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const randomString = require('./Modules/randomString');
const sessionToken = randomString();
const app = express();
const port = 9000;
const authorizationURL = 'authorization';
const registrationURL = 'registration';
const Users = new (require('./Modules/Users'))();
const Auth = new (require('./Modules/Authorization'))(Users, authorizationURL);
const Roles = new (require('./Modules/Roles'))();
const Reg = new (require('./Modules/Registration'))(Users, Roles, registrationURL);

const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: '.hbs',
   layoutsDir: path.join(__dirname, 'pages/layouts'),
});

app.use(express.static(path.join(__dirname + '/src'), { redirect: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({ secret: sessionToken }));

// authorization
// app.post('/authorization', Auth.POST);
// app.get('/authorization', Auth.GET);

//registration main
app.use('/registration', Reg.main);
// app.get('/registration', Reg.GET);
// app.post('/registration', Reg.POST);

// authorization main
app.use(Auth.main);

app.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect(authorizationURL);
});

app.get('*', (req, res) => {
   res.render('main', { headTitle: 'home' });
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
