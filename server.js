const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middlewear
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);


sequelize.sync({force:true}).then(()=> {
app.listen(PORT, () => console.log('Now listening to port 3001'));
});