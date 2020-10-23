module.exports = (sequelize, DataType) => {
  let Product = sequelize.define("products", {
    name: DataType.STRING,
    price: DataType.FLOAT,
    quantity: DataType.INTEGER,
    category: DataType.STRING,

    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
  });

  return Product;
};
