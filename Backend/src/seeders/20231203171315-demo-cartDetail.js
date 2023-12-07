'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CartDetail', [{
      id: 'id_CartDetail_1',
      idCart: 'id_Cart_1',
      idProduct: 'id_Product_1',
      quatity: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_CartDetail_2',
      idCart: 'id_Cart_1',
      idProduct: 'id_Product_4',
      quatity: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CartDetail', null, {});
  }
};
