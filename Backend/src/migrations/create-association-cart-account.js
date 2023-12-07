'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('Cart', {
            fields: ['idCustomer'],
            type: 'foreign key',
            name: 'fk_Cart_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Cart', {
            fields: ['idCustomer'],
            type: 'foreign key',
            name: 'fk_Cart_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
