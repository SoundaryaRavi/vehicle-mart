const { handleParamErr } = require('../services/error.service');
const productModel = require('../models/product.model');
const { THREE } = require('../constants/constants')

const getProducts = async (data) => {
    try {
        if (!data || !data.categoryId) {
            return handleParamErr();
        }
        return await productModel.find({ categoryId: data.categoryId });
    }
    catch (error) {
        throw error;
    }
}

const topRatedProducts = async () => {
    try {
        return await productModel.find({}).sort({ ratings: -1 }).limt(THREE);
    }
    catch (error) {
        throw error;
    }
}

const searchForProduct = async (data) => {
    try {
        if (!data || !data.key) {
            return handleParamErr();
        }
        return await productModel.find({
            $or: [
                { name: { $regex: data.key, $options: "i" } },
                { sku: { $regex: data.key, $options: "i" } }
            ]
        });
    }
    catch (error) {
        throw error;
    }
}

module.exports = { getProducts, topRatedProducts, searchForProduct };