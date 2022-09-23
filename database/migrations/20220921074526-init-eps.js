"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("eps", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      _id: STRING(250),
      name: STRING(250),
      img: STRING(250),
      sort: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("eps");
  },
};
