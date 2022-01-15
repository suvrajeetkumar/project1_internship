const Sequelize = require("sequelize");
const sequelize = require("../database");

const Students = sequelize.define("students", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  });
  
  module.exports = Students;