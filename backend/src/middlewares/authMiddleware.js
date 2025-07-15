const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to authenticate user
// This middleware checks if the user is authenticated by verifying the JWT token

const authMiddleware = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]; // Assuming the token
    console.log('Token:', token);
    
    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        console.log('decoded:', decoded);
        req.user = decoded;
        if(decoded.Admin) {
            next();
        }else {
            return res.status(403).json({
                message: 'Access denied. Not an admin.'
            });
        }
        
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid token',
            error: error.message
        });
    }
};

module.exports = authMiddleware;
