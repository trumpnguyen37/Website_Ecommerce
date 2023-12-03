'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('OderDetail', {
            fields: ['idProduct'],
            type: 'foreign key',
            name: 'fk_OderDetail_Product',
            references: {
                table: 'Product',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('OderDetail', {
            fields: ['idProduct'],
            type: 'foreign key',
            name: 'fk_OderDetail_Product',
            references: {
                table: 'Product',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
