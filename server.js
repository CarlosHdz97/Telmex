const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session =require('express-session');

const app = express();
app.use('/assets',express.static('assets'));

const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');
const recibosRoutes = require('./routes/recibos_routes');
const userRoutes = require('./routes/user_routes');
const pagoRoutes = require('./routes/pago_routes');
const homeRoutes = require('./routes/home_routes');

const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use(session({
  secret:['tertertergerger','534534534tergert34'],
  saveUninitialized:false,
  resave:false
}));

app.use(findUserMiddleware);
app.use(authUser);

app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(recibosRoutes);
app.use(userRoutes);
app.use(pagoRoutes);
app.use(homeRoutes);
app.get('/receive', function(req, res){
  var file = '../pagoTelefonia.xml';
  console.log(file);
  res.download(file); // Set disposition and send it.
});

app.listen(process.env.PORT || 3000);
