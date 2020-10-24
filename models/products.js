module.exports = (sequelize, DataType) => {
  let Product = sequelize.define("products", {
    name: DataType.STRING,
    price: DataType.FLOAT,
    quantity: DataType.INTEGER,
    category: DataType.STRING,

    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
  });

  Product.associate = (models) => {
    Product.belongsToMany(
      models.users,
      {
        through: models.sales,
        foreignKey: 'products_id'
      })
  }

  return Product;
};
