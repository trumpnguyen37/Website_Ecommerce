'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('Oder', {
            fields: ['idCustomer'],
            type: 'foreign key',
            name: 'fk_Oder_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Oder', {
            fields: ['idCustomer'],
            type: 'foreign key',
            name: 'fk_Oder_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
