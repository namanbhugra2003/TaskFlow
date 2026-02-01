const { Task } = require('../models');

exports.createTask = async (req, res) => {
  const { title, project_id, assigned_to } = req.body;

  const task = await Task.create({
    title,
    project_id: parseInt(project_id),
    assigned_to: parseInt(assigned_to),
  });

  res.status(201).json(task);
};


exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  const task = await Task.findByPk(req.params.id);
  task.status = status;
  await task.save();

  res.json(task);
};
exports.getMyTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { assigned_to: req.user.id },
  });

  res.json(tasks);
};
