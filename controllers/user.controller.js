const { loginUser, registerUser } = require('../api/user.api');
const { HTTP_STATUS_CODES } = require('../constants/constants');

const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ token: token });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

const register = async (req, res) => {
    try {
        const token = await registerUser(req.body);
        return await res.status(HTTP_STATUS_CODES.CREATED).json({ token: token });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

module.exports = { login, register };