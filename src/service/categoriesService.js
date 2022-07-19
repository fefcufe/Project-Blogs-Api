const { Category } = require('../database/models');

const addCategory = async (data) => {
    const newCategory = await Category.create(data);
    return newCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    addCategory,
    getAllCategories,
};