const express = require('express');
const router = express.Router();

const products = []; // global products list 

// get pug
router.get('/add-pug', (request, response, next) => {
  response.render('addpug', { title: 'Add Pug', page: 'pug' });
});

// post pug
router.post('/add-pug', (request, response, next) => {
  products.push({ item: request.body.item });
  response.redirect('/');
});

// 404 
router.use('/', (request, response, next) => {
  response.render('404', {title: "Not Found", page: '404'});
});


module.exports = router;
module.exports.products = products;
