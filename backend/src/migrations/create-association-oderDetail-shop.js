'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('OderDetail', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_OderDetail_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('OderDetail', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_OderDetail_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
