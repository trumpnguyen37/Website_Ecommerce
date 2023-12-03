'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Account, { foreignKey: 'idCustomer' });
      Cart.hasMany(models.CartDetail, { foreignKey: 'idCart' });
    }
  }
  Cart.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    idCustomer: DataTypes.UUID
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Cart',
  });
  return Cart;
};