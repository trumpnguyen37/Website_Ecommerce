'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Category.hasMany(models.Product, { foreignKey: 'idCategory'});
            Category.hasMany(models.CategoryShop, { foreignKey: 'idCategory'});
        }
    }
    Category.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
        },
        image: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'Category',
    });
    return Category;
};