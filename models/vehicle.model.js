const mongoose = require('mongoose');
const schema = mongoose.Schema;

const vehicleSchema = new schema({
    name: String
});

const vehicleModel = mongoose.model('vehicle', vehicleSchema);

module.exports = vehicleModel;