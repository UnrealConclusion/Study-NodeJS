const express = require('express');
const router = express.Router();

const products = []; // global products list (for demonstration purposes) 

// get pug
router.get('/add-product', (request, response, next) => {
  response.render('addproduct', 
	  { 
		title: 'Add Product', 
		layout: 'main',
		activeShop: false,
		activeAdd: true
	  });
});

// post pug
router.post('/add-product', (request, response, next) => {
	products.push({ item: request.body.item });
	response.redirect('/');
});

// 404 
router.use('/', (request, response, next) => {
  response.render('404', 
	{
		title: "Not Found", 
		layout: 'main',
		activeShop: false,
		activeAdd: false
	});
});


module.exports = router;
module.exports.products = products;