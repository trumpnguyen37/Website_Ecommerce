'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('CartDetail', {
            fields: ['idCart'],
            type: 'foreign key',
            name: 'fk_CartDetail_Cart',
            references: {
                table: 'Cart',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('CartDetail', {
            fields: ['idCart'],
            type: 'foreign key',
            name: 'fk_CartDetail_Cart',
            references: {
                table: 'Cart',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
