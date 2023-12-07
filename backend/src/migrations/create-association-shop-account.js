'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('Shop', {
            fields: ['idAccount'],
            type: 'foreign key',
            name: 'fk_Shop_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Shop', {
            fields: ['idAccount'],
            type: 'foreign key',
            name: 'fk_Shop_Account',
            references: {
                table: 'Account',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
