"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Track = app.model.define("track", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    _id: { type: STRING, field: "_id" },
    title: STRING(250),
    epId: STRING(250),
    length: STRING(250),
    src: STRING(250),
    sort: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Track;
};
