const service = require('../service/categoriesService');

const addCategory = async (req, res) => {
    try {
        const newCategory = await service.addCategory(req.body);
        return res.status(201).json(newCategory);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const getCategories = async (_req, res) => {
    try {
        const categories = await service.getAllCategories();
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    addCategory,
    getCategories,
};