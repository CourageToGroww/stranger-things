const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("strangerthings", "jake", "Somethingez11!", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
