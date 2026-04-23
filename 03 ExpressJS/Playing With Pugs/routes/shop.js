const express = require('express');
const router = express.Router();

const data = require('./admin');

router.get('/', (req, res, next) => {
  const products = data.products;
  res.render('shop', {title: 'Pug Shop', page: 'home', products: products});
});

module.exports = router;