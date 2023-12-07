'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryShop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryShop.belongsTo(models.Category, { foreignKey: 'idCategory' });
      CategoryShop.belongsTo(models.Shop, { foreignKey: 'idShop' });
    }
  }
  CategoryShop.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    idCategory: DataTypes.UUID,
    idShop: DataTypes.UUID,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'CategoryShop',
  });
  return CategoryShop;
};