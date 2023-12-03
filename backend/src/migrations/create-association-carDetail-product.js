'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('CartDetail', {
            fields: ['idProduct'],
            type: 'foreign key',
            name: 'fk_CartDetail_Product',
            references: {
                table: 'Product',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('CartDetail', {
            fields: ['idProduct'],
            type: 'foreign key',
            name: 'fk_CartDetail_Product',
            references: {
                table: 'Product',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
