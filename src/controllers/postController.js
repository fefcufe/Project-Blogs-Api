const service = require('../service/postService');

const getPosts = async (_req, res) => {
    try {
        const users = await service.getPosts();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    getPosts,
};