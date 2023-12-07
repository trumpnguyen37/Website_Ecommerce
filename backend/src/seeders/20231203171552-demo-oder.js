'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Oder', [{
      id: 'id_Oder_1',
      idCustomer: 'abc123',
      deliveryAddress: '30 An Duong Vuong, Da Nang',
      oderDate: '2023-12-02 20:20:20',
      deliveryPhoneNumber: '0368253526',
      status: 'Dang van chuyen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_Oder_2',
      idCustomer: 'c2ace450-5b5f-4407-a765-06bcd76e9842',
      deliveryAddress: '145 Ly Tu Trong, Da Nang',
      oderDate: '2023-11-30 11:11:11',
      deliveryPhoneNumber: '0987546346',
      status: 'Da nhan hang',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Oder', null, {});
  }
};
