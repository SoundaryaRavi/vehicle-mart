let jwt = require('jsonwebtoken');

const { HTTP_STATUS_CODES } = require('../constants/constants');

const checkToken  = async (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).send('Access denied');
    try {
        const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
        if (!decode) {
            return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).send('Token is not valid');
        }
        req.user = decode.userId;
        next();
    } catch (error) {
        return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).send(error);
    }
}

const getSignedToken = async (userId) => {
    return jwt.sign({ userId: userId },
        process.env.TOKEN_SECRET
    );
}

module.exports = { checkToken, getSignedToken };