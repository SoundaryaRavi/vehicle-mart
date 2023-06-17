const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceSchema = new schema({

});

const serviceModel = mongoose.model('service', serviceSchema);

module.exports = serviceModel;