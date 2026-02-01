const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role,
  });

  res.status(201).json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
exports.getOnlyUsers = async (req, res) => {
  const users = await User.findAll({
    where: { role: 'user' },
    attributes: ['id', 'name', 'email', 'role'],
  });

  res.json(users);
};
