const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = new schema({
    userId: { type: schema.Types.ObjectId, ref: 'user' },
    items: [{
        productId: { type: schema.Types.ObjectId, ref: 'product' },
        quantity: Number
    }]
});

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;