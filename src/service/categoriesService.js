const { Category } = require('../database/models');

const addCategory = async (data) => {
    const newCategory = await Category.create(data);
    return newCategory;
};

module.exports = {
    addCategory,
};