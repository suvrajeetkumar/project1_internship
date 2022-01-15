const Sequelize = require("sequelize");
const sequelize = require("../database");

const Subject = sequelize.define("subject", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
    },
   
  });
  
  module.exports = Subject;