'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('CategoryShop', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_CategoryShop_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('CategoryShop', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_CategoryShop_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
