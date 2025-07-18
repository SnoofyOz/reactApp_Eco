const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = async (payload) => {
    const access_token = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN,
        { expiresIn: '24h' }
    );
    
    return access_token;
}

const generateRefreshToken = async (payload) => {
    const refresh_token = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN,
        { expiresIn: '7d' }
    );
    return refresh_token;
}

module.exports = {
    generateToken,
    generateRefreshToken
};