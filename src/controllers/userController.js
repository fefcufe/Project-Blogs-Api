const service = require('../service/userService');

const addUser = async (req, res, _next) => {
    try {
      const { email } = req.body;
      const bool = await service.findUserByEmail(email);
      if (bool) {
          return res.status(409).json({ message: 'User already registered' });
      }
      const token = await service.createUser(req.body);
      return res.status(201).json({ token });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    addUser,
};