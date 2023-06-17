const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
   name: String,
   quantity: Number,
   price: Number, // price per quantity in Dollars
   ratings: Number,
   sku: String,
   imageUrl: String,
   offerId: { type: schema.Types.ObjectId, ref: 'offer' },
   categoryId: { type: schema.Types.ObjectId, ref: 'category' },
   brandId : { type: schema.Types.ObjectId, ref: 'brand' },
   vehicleId :  { type: schema.Types.ObjectId, ref: 'vehicle' }
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;