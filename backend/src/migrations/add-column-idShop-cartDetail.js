'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CartDetail', 'idShop', {
      type: Sequelize.UUID,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CartDetail', 'idShop');
  },
};
