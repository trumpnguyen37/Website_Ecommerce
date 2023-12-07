'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('Product', {
            fields: ['idCategory'],
            type: 'foreign key',
            name: 'fk_Product_Category',
            references: {
                table: 'Category',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('Product', {
            fields: ['idCategory'],
            type: 'foreign key',
            name: 'fk_Product_Category',
            references: {
                table: 'Category',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    }
};
