const express = require('express');
const router = express.Router();

const data = require('./admin');

router.get('/', (req, res, next) => {
  const products = data.products;
  console.log(products);
  res.render('shop', {title: 'Shop', products: products});
});

module.exports = router;