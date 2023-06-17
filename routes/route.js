const express = require('express');

let router = express.Router();

const userRoutes = require('./user.route');
const orderRoutes = require('./order.route');
const productRoutes = require('./product.route');

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);

module.exports = router;