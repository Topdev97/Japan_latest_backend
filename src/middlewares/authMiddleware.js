const jwt = require('jsonwebtoken');
const User = require('../model/user');

const authMiddleware = (allowedRoles = []) => {
    return async (req, res, next) => {
        try {
            if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
                return res.status(401).json({ error: 'Unauthorized', message: 'Authorization header is missing or invalid.' });
            }

            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.decode(token)

            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ error: 'Not Found', message: 'User not found.' });
            }

            if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
                return res.status(403).json({ error: 'Forbidden', message: 'Access denied. Insufficient permissions.' });
            }

            req.user = user;
            next();
        } catch (error) {
            res.status(403).json({ error: 'Forbidden', message: error.message });
        }
    };
};

module.exports = authMiddleware;
