'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('OderDetail', {
            fields: ['idOder'],
            type: 'foreign key',
            name: 'fk_OderDetail_Oder',
            references: {
                table: 'Oder',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('OderDetail', {
            fields: ['idOder'],
            type: 'foreign key',
            name: 'fk_OderDetail_Oder',
            references: {
                table: 'Oder',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
