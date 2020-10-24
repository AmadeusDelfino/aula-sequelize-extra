module.exports = (sequelize, DataType) => {
    let Sale = sequelize.define("sales", {
      users_id: DataType.INTEGER,
      products_id: DataType.INTEGER,
      quantity: DataType.INTEGER,
  
      createdAt: DataType.DATE,
      updatedAt: DataType.DATE,
    });
    
    Sale.associate = (models) => {
        Sale.belongsTo(models.users, {
            foreignKey: 'users_id'
        }),
        Sale.belongsTo(models.products, {
            foreignKey: 'products_id'
        })
    }

    return Sale;
  };
  