const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async (data) => {
    const newUser = await User.create(data);
    const { email } = newUser;
    
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
      };

    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return token;
};

const findUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return false;
    }
    return true;
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: 'password' } });
    return users;
};

module.exports = {
    createUser,
    findUserByEmail,
    getUsers,
};