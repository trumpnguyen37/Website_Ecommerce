'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartDetail.belongsTo(models.Product, { foreignKey: 'idProduct' });
      CartDetail.belongsTo(models.Cart, { foreignKey: 'idCart' });
    }
  }
  CartDetail.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    idCart: DataTypes.UUID,
    idProduct: DataTypes.UUID,
    quatity: DataTypes.INTEGER,  
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'CartDetail',
  });
  return CartDetail;
};