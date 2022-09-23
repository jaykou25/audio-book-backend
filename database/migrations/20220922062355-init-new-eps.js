"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable("new_eps", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      hide_Audio: BOOLEAN(),
      new_ep_ids: STRING(300),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("new_eps");
  },
};
