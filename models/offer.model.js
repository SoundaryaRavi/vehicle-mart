const mongoose = require('mongoose');
const schema = mongoose.Schema;

const offerSchema = new schema({
   name: String,
   percent: Number
});

const offerModel = mongoose.model('offer', offerSchema);

module.exports = offerModel;