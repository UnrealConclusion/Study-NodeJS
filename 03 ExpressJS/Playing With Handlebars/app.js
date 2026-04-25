const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// configure express to use Handlebars
app.engine('handlebars', expressHbs.engine()); // registers the templating engine
app.set('view engine', 'handlebars');
app.set('views', 'views'); // default

// use body parser
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// import and mount routes 
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
app.use(shopRoutes);
app.use(adminRoutes);

app.listen(3000);