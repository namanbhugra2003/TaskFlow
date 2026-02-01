const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM('todo', 'inprogress', 'done'),
    defaultValue: 'todo',
  },
  project_id: DataTypes.INTEGER,     // ✅ ADD
  assigned_to: DataTypes.INTEGER,   // ✅ ADD

}, {
  timestamps: true
});

module.exports = Task;
