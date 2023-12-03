'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: 'idCategory' });
      Product.hasMany(models.CartDetail, { foreignKey: 'idProduct' });
      Product.hasMany(models.OderDetail, { foreignKey: 'idProduct' });
    }
  }
  Product.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    cover: DataTypes.TEXT,
    discount: DataTypes.STRING,
    price: DataTypes.STRING,
    name: DataTypes.STRING,
    typeComponent: DataTypes.STRING,
    idCategory: DataTypes.UUID
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Product',
  });
  return Product;
};