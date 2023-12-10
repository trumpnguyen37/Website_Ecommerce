'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('CartDetail', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_CartDetail_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('CartDetail', {
            fields: ['idShop'],
            type: 'foreign key',
            name: 'fk_CartDetail_Shop',
            references: {
                table: 'Shop',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
