"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("tracks", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      _id: STRING(300),
      ep_id: STRING(300),
      length: STRING(250),
      src: STRING(250),
      title: STRING(250),
      sort: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tracks");
  },
};
