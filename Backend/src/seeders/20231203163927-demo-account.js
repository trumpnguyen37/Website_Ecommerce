'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Account', [{
      id: 'abc123',
      email: 'thaithang115@gmail.com',
      password: '$2b$10$7p0gxT9WZHMKt2FEOTOe0eLrv0oVpeqT1LuysV3V5GtFwmWiVlgcm',
      name: 'Thai Thang',
      phoneNumber: '0368253526',
      idRole: '711821a4-91bd-11ee-90a2-c03eba29bf1f',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Account', null, {});
  }
};
