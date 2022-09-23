"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Ep = app.model.define("ep", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    _id: { type: STRING, field: "_id" },
    name: STRING(250),
    img: STRING(250),
    sort: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Ep;
};
