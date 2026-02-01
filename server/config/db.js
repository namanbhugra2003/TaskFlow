const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
  pool: {
    max: 1,
    min: 0,
    idle: 0,
    acquire: 30000,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;
