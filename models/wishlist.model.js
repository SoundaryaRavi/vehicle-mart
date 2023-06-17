const mongoose = require('mongoose');
const schema = mongoose.Schema;

const wishListSchema = new schema({
userId: { type: schema.Types.ObjectId, ref: 'user' },
productId: { type: schema.Types.ObjectId, ref: 'product' }
});

const wishListModel = mongoose.model('wishList', wishListSchema);

module.exports = wishListModel;