const mongoose = require('mongoose');
const schema = mongoose.Schema;

const crypto = require('crypto');

const { HEX_CONVERSION, RANDOM_BYTES_LENGTH,
    CONVERSION_ALG, ITERATIONS, KEY_LEN } = require("../constants/constants");

const userSchema = new schema({
   name: String,
   address: String,
   email: String,
   hash: String,
   salt: String
});

userSchema.index({
   email: 1
}, {
   unique: true
});

userSchema.methods.setPassword = function (password) {
    const userPassword = this;
    userPassword.salt = crypto.randomBytes(RANDOM_BYTES_LENGTH).toString(HEX_CONVERSION);
    userPassword.hash = crypto.pbkdf2Sync(password, this.salt, ITERATIONS, KEY_LEN, CONVERSION_ALG).toString(HEX_CONVERSION);
};

userSchema.methods.validatePassword = function (password) {
    const userPassword = this;
    let hash = crypto.pbkdf2Sync(password, this.salt, ITERATIONS, KEY_LEN, CONVERSION_ALG).toString(HEX_CONVERSION);
    return userPassword.hash === hash;
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;