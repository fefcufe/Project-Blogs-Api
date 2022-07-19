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

const getUsers = async (_req, res) => {
    try {
        const users = await service.getUsers();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await service.getUserById(id);
        console.log(user);
        if (!user || user.length === 0) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(user);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    addUser,
    getUsers,
    getUserById,
};