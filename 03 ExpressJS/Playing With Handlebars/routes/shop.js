const express = require('express');
const router = express.Router();

const data = require('./admin');

router.get('/', (req, res, next) => {
  const products = data.products;
  console.log(products);
  res.render('shop', 
	  {
		  title: 'Shop', 
		  page: 'home', 
		  products: products,
		  layout: 'main',
		  activeShop: true,
		  activeAdd: false,
		  hasProducts: products.length > 0
		});
});

module.exports = router;