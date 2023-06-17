const { handleParamErr } = require('../services/error.service');
const { getSignedToken } = require('../middlewares/token');
const { findUser, isPasswordCorrect, isUserExists, isUserExistsAlready, createUser } = require('../services/user.service');

const loginUser = async (data) => {
    try {
        if (!data || !data.email || !data.password) {
            return handleParamErr();
        }
        const user = await findUser(data.email);
        await isUserExists(user);
        await isPasswordCorrect(user, data.password);
        return await getSignedToken(user._id);
    }
    catch (err) {
        throw {
            status: HTTP_STATUS.ERROR,
            message: err
        };
    }
}

const registerUser = async (data) => {
    try {
        if (!data || !data.email || !data.name || !data.password) {
            return handleParamErr();
        }
        const user = await findUser(data.email);
        await isUserExistsAlready(user);
        const newUser = await createUser(data);
        return await getSignedToken(newUser._id);
    }
    catch (err) {
        throw {
            status: HTTP_STATUS.ERROR,
            message: err
        };
    }
}

module.exports = {
    loginUser,
    registerUser
}