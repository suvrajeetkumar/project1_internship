// var mysql = require("mysql");

// const connection = mysql.createPool({
//     host : 'localhost',
//     database : 'student_details',
//     user: 'root',
//     password : 'Bhaswati@123', 
// });
require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    dialect: "mysql",
    host: process.env.HOST,
})

module.exports = sequelize;
//module.exports = connection;