'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OderDetail.belongsTo(models.Product, { foreignKey: 'idProduct' });
      OderDetail.belongsTo(models.Oder, { foreignKey: 'idOder' });
    }
  }
  OderDetail.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    idOder: DataTypes.UUID,
    idProduct: DataTypes.UUID,
    quatity: DataTypes.INTEGER,  
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'OderDetail',
  });
  return OderDetail;
};