const { Project, User } = require('../models');

exports.createProject = async (req, res) => {
  const { title, description } = req.body;

  const project = await Project.create({
    title,
    description,
    created_by: req.user.id,
  });

  res.status(201).json(project);
};

exports.getAllProjects = async (req, res) => {
  const projects = await Project.findAll({
    include: [{ model: User, attributes: ['id', 'name', 'email'] }],
  });

  res.json(projects);
};
