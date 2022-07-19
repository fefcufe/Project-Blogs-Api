const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    tableName: 'Categories',
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, 
      { foreignKey:'categoryId', as: 'postcategories'})
  };

  return Category;
};

module.exports = Category;