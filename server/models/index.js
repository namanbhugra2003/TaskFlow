const User = require('./User');
const Project = require('./Project');
const Task = require('./Task');

// Relations
User.hasMany(Project, { foreignKey: 'created_by' });
Project.belongsTo(User, { foreignKey: 'created_by' });

Project.hasMany(Task, { foreignKey: 'project_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

User.hasMany(Task, { foreignKey: 'assigned_to' });
Task.belongsTo(User, { foreignKey: 'assigned_to' });

module.exports = { User, Project, Task };
