'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Oder.belongsTo(models.Account, { foreignKey: 'idCustomer' });
      Oder.hasMany(models.OderDetail, { foreignKey: 'idOder' });
      Oder.belongsTo(models.Shop, { foreignKey: 'idShop' });
    }
  }
  Oder.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    idCustomer: DataTypes.UUID,
    deliveryAddress: DataTypes.STRING,
    oderDate: DataTypes.DATE,
    deliveryPhoneNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    idShop: DataTypes.UUID,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Oder',
  });
  return Oder;
};