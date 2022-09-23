"use strict";

module.exports = (app) => {
  const { STRING, DATE, INTEGER, BOOLEAN } = app.Sequelize;

  const NewEp = app.model.define("newEp", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hideAudio: BOOLEAN,
    newEpIds: STRING(300),
    createdAt: DATE,
    updatedAt: DATE,
  });

  return NewEp;
};
