const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new schema({
    name: String
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;