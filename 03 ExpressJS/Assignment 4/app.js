const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = []; // just for the demo

// configure express to use EJS
app.set('view engine', 'ejs');
app.set('views', 'views'); // default

// use body parser
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res, next) => {
    res.render('index');
});
app.get('/users', (req, res, next) => {
    res.render('users');
});
app.get('/new-user', (req, res, next) => {
    res.render('new-user');
});
app.post('/add-user', (req, res, next) => {
    users.push(req.body.username);
    res.redirect('/list-users');
});
app.get('/list-users', (req, res, next) => {
    res.render('list-users', {users: users});
});
app.use('/', (req, res, next) => {
    res.render('404');
});
app.listen(3000);