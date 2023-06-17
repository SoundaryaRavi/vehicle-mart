const mongoose = require('mongoose');
const schema = mongoose.Schema;

const brandSchema = new schema({
    name: String
});

const brandModel = mongoose.model('brand', brandSchema);

module.exports = brandModel;