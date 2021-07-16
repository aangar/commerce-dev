const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.route('/')
    .get(products.getListings)

router.route('/:id')
    .get(products.getItemPage);

module.exports = router;