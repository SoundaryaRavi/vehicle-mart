const userModel = require('../models/user.model');
const { HTTP_STATUS_CODES } = require('../constants/constants');

const findUser = async (email) => {
    return await userModel.findOne({ email: email });
}

const isUserExists = (user) => {
    if (!user) {
        throw {
            message: 'User not found',
            status: HTTP_STATUS_CODES.NOT_FOUND
        };
    }
    return '';
}

const isUserExistsAlready = (user) => {
    if (user) {
        throw {
            status: HTTP_STATUS.BAD_REQUEST,
            message: 'User already exists'
        }
    }
    return '';
}

const isPasswordCorrect = async (user, password) => {
    if (user.validatePassword(password)) {
        return user;
    }
    throw {
        message: 'Email or Password is incorrect',
        status: HTTP_STATUS_CODES.BAD_REQUEST
    };
}

const createUser = async (userDetails) => {
    try {
        let newUser = new userModel();
        newUser.email = userDetails.email;
        newUser.name = userDetails.name;
        await newUser.setPassword(userDetails.password);
        let savedUser = await updatedNewUser.save();
        return savedUser;
    }
    catch (err) {
        throw {
            message: err,
            status: HTTP_STATUS.ERROR
        }
    }
}

module.exports = { findUser, isUserExists, isPasswordCorrect, isUserExistsAlready, createUser }