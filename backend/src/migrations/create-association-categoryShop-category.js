'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('CategoryShop', {
            fields: ['idCategory'],
            type: 'foreign key',
            name: 'fk_CategoryShop_Category',
            references: {
                table: 'Category',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('CategoryShop', {
            fields: ['idCategory'],
            type: 'foreign key',
            name: 'fk_CategoryShop_Category',
            references: {
                table: 'Category',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
