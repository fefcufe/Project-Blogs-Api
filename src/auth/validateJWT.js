const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findOne({ where: { email: decoded.data.email } });
        if (!user) {
            return res.status(401).json({ message: 'Tokens user not found' });
        }
        req.user = user;
        return next();
    } catch (e) {
        return res.status(401).json({ message: e.message });
    }
};