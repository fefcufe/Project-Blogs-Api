const service = require('../service/categoriesService');

const addCategory = async (req, res) => {
    try {
        const newCategory = await service.addCategory(req.body);
        return res.status(201).json(newCategory);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    addCategory,
};