const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  // return res.status(200).json({ message: 'funcionando!', email, password });   
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  const user = await User.findOne({ where: { email } });
  // return res.status(200).json({ user });
   if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: email }, secret, jwtConfig);
  return res.status(200).json({ token });  
};

module.exports = {
  postLogin,
};