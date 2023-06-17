const express = require('express');

let router = express.Router();
const { getBestSellerProducts } = require('../controllers/order.controller');
const { checkToken } = require('../middlewares/token');

router.get('/best', checkToken, getBestSellerProducts);

module.exports = router;