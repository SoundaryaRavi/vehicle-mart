const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reviewSchema = new schema({
    message: String,
    productId: { type: schema.Types.ObjectId, ref: 'product' }
});

const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel;