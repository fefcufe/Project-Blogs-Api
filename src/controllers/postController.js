const service = require('../service/postService');

const getPosts = async (_req, res) => {
    try {
        const users = await service.getPosts();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const email = req.user;
        const result = await service.updatePost(req.body, id, email);
        if (!result) {
            return res.status(401).json({ message: 'Unauthorized user' });
        }
        return res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* const testando = async (req, res) => {
    try {
      const { id } = req.params;
      const resultado = await service.testando(id);
      return res.status(200).json(resultado);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}; */

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.getPostById(id);
        console.log(response);
        if (!response) {
            return res.status(404).json({ message: 'Post does not exist' });
        }
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

module.exports = {
    getPosts,
    updatePost,
    getPostById,
};