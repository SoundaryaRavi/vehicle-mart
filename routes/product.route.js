const express = require('express');

let router = express.Router();
const { getFeaturedProducts, getTopRatedProducts, getSearchResults } = require('../controllers/product.controller');
const { checkToken } = require('../middlewares/token');

router.get('/', checkToken, getFeaturedProducts);
router.get('/top', checkToken, getTopRatedProducts);
router.get('/:key', checkToken, getSearchResults);

module.exports = router;