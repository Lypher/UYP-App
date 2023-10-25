require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserModel = require("./models/UserModel");
const AdminModel = require("./models/AdminModel");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

const User = UserModel(database);
const Admin = AdminModel(database);

module.exports = { User,Admin,database };
