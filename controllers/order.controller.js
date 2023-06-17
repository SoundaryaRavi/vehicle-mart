const { bestSellerProducts } = require('../api/order.api');
const { HTTP_STATUS_CODES } = require('../constants/constants');

const getBestSellerProducts = async (req, res) => {
    try {
        const products = await bestSellerProducts();
        res.status(HTTP_STATUS_CODES.SUCCESS).send(products);
    }
    catch (error) {
        res.status(HTTP_STATUS_CODES.ERROR).send(error);
    }
}

module.exports = { getBestSellerProducts };