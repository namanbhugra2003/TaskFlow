const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: console.log,
  pool: {
    max: 1,
    min: 0,
    idle: 0,
    acquire: 30000,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
  retry: {
    max: 5,
  },
});

module.exports = sequelize;
