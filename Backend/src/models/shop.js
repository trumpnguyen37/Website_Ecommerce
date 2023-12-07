'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shop.belongsTo(models.Account, { foreignKey: 'idAccount' });
      Shop.hasMany(models.Oder, { foreignKey: 'idShop' });
      Shop.hasMany(models.CategoryShop, { foreignKey: 'idShop' });
      Shop.hasMany(models.Product, { foreignKey: 'idShop' });
    }
  }
  Shop.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    idAccount: DataTypes.UUID
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Shop',
  });
  return Shop;
};