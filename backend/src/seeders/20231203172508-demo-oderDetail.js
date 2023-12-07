'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OderDetail', [{
      id: 'id_OderDetail_1',
      idOder: 'id_Oder_1',
      idProduct: 'id_Product_3',
      quatity: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_OderDetail_2',
      idOder: 'id_Oder_1',
      idProduct: 'id_Product_4',
      quatity: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OderDetail', null, {});
  }
};
