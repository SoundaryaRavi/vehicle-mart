const orderModel = require('../models/order.model');

const bestSellerProducts = async () => {
    try {
        return await orderModel.aggregate([
            {
              "$unwind": "$items"
            },
            {
              "$group": {
                "_id": "$items.productId",
                "sum": {
                  "$sum": "$items.quantity"
                }
              }
            },
            {
              "$sort": {
                sum: -1
              }
            },
            {
              "$group": {
                "_id": null,
                "best_seller_products ": {
                  $push: "$$ROOT"
                }
              }
            }
          ])
    }
    catch (error) {
        throw error;
    }
}

module.exports = { bestSellerProducts };