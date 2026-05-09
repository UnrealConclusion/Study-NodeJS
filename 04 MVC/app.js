const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const app = express();

// configure express to use EJS
app.set('view engine', 'ejs');
app.set('views', 'views'); // default

// use body parser
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// import and mount routes 
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(shopRoutes);
app.use('/admin', adminRoutes);
app.use(errorController.get404);

app.listen(3000);