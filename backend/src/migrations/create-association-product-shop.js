'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('Product', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_Product_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Product', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_Product_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
