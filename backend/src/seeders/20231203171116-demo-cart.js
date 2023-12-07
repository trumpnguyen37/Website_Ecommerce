'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cart', [{
      id: 'id_Cart_1',
      idCustomer: 'abc123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_Cart_2',
      idCustomer: 'c2ace450-5b5f-4407-a765-06bcd76e9842',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cart', null, {});
  }
};
