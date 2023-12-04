'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Account', {
      fields: ['idRole'],
      type: 'foreign key',
      name: 'fk_Account_Role',
      references: {
        table: 'Role',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Account', {
        fields: ['idRole'],
        type: 'foreign key',
        name: 'fk_Account_Role',
        references: {
          table: 'Role',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
  }
};
