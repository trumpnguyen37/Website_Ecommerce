'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.TEXT
      },
      discount: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      idCategory: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product');
  }
};