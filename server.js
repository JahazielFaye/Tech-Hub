const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  // creates an instance of Handlebars.js with the custom helpers
    helpers
});
const session = require('express-session');  // imports the Express.js session middleware
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {   // configuration for the session middleware
  secret: 'mysecretkey',
  cookie: {},
  resave: false,   // whether to save the session store even if it wasn't modified
  saveUninitialized: true,  // whether to save new sessions even if they haven't been modified
  store: new SequelizeStore({
    db: sequelize,  // the Sequelize instance for connecting to the database
    checkExpirationInterval: 1000 * 60 * 10, // will check every 10 minutes
    expiration: 1000 * 60 * 30 // will expire after 30 minutes
  })
};


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public'))); // serves static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

sequelize.sync();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});