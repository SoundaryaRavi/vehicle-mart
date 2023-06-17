const { getProducts, topRatedProducts, searchForProduct } = require('../api/product.api');
const { HTTP_STATUS_CODES } = require('../constants/constants')

const getFeaturedProducts = async (req, res) => {
    try {
        const products = await getProducts(req.query);
        res.status(HTTP_STATUS_CODES.SUCCESS).send(products);
    }
    catch (error) {
        res.status(HTTP_STATUS_CODES.ERROR).send(error);
    }
}

const getTopRatedProducts = async (req, res) => {
    try {
        const products = await topRatedProducts();
        res.status(HTTP_STATUS_CODES.SUCCESS).send(products);
    }
    catch (error) {
        res.status(HTTP_STATUS_CODES.ERROR).send(error);
    }
}

const getSearchResults  = async (req, res) => {
    try {
        const products = await searchForProduct(req.params);
        res.status(HTTP_STATUS_CODES.SUCCESS).send(products);
    }
    catch (error) {
        res.status(HTTP_STATUS_CODES.ERROR).send(error);
    }
}


module.exports = { getFeaturedProducts, getTopRatedProducts, getSearchResults };