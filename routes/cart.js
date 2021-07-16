const express = require('express');
const router = express.Router();
const cartRoutes = require('../controllers/cart');
const { loginCheck } = require('../middleware/loginCheck');

router.route('/')
    .get(loginCheck, cartRoutes.getCart);

router.put('/update', loginCheck, cartRoutes.updateCart)

module.exports = router;