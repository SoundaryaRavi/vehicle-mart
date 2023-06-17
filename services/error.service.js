const { HTTP_STATUS_CODES } = require('../constants/constants');

const handleParamErr = () => {
    throw {
        message: 'Required parameters are missing',
        status: HTTP_STATUS_CODES.BAD_REQUEST
    }
}

module.exports = { handleParamErr };