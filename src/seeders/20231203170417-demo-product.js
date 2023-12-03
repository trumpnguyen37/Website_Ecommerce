'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product', [{
      id: 'id_Product_1',
      title: 'Ao 111',
      desc: 'Ao bong da sieu dep',
      cover: null,
      discount: '10',
      price: '100',
      name: 'Ao bong da 111',
      typeComponent: null,
      idCategory: 'idCategory_2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_Product_2',
      title: 'Ao 222',
      desc: 'Ao bong da dep sieu cap vu tru',
      cover: null,
      discount: '5',
      price: '200',
      name: 'Ao bong da 222',
      typeComponent: null,
      idCategory: 'idCategory_2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_Product_3',
      title: 'Giay 111',
      desc: 'Giay da bong sieu dep',
      cover: null,
      discount: '5',
      price: '100',
      name: 'Giay da bong 111',
      typeComponent: null,
      idCategory: 'idCategory_1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'id_Product_4',
      title: 'Giay 222',
      desc: 'Giay da bong dep sieu cap vu tru',
      cover: null,
      discount: '10',
      price: '200',
      name: 'Giay da bong 222',
      typeComponent: null,
      idCategory: 'idCategory_1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
