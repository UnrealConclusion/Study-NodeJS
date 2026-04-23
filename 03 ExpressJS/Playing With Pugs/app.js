const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// configure express to use Pug
app.set('view engine', 'pug');
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