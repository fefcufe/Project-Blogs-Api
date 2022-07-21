const { BlogPost, User, Category } = require('../database/models');

const getPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, 
                    as: 'user', 
                    attributes: { exclude: 'password' },  
                  },
                  { model: Category, as: 'categories', through: { attributes: [] } },
                ],
    }); 
    return posts;
};

const updatePost = async (data, id) => {
    await BlogPost.update(data, { where: { id } });
    const response = BlogPost.findByPk(
        id,
        { include: [{ model: User, as: 'user', attributes: { exclude: 'password' } }],
    },
);
    return response;
};

const getPostById = async (id) => {
    const post = BlogPost.findByPk(id, 
        { include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } }, 
            { model: Category, as: 'categories', through: { attributes: [] } },
        ], 
    });
    return post;
};

/* const testando = async (id) => {
    const testResult = await PostCategory.findAndCountAll({ where: { id } });
    return testResult;
}; */

module.exports = {
    getPosts,
    updatePost,
    getPostById,
};