const bcrypt = require('bcryptjs');
const { User } = require('../models');

const createAdmin = async () => {
  const exists = await User.findOne({ where: { email: 'admin@test.com' } });
  if (exists) return;

  const hashed = await bcrypt.hash('admin123', 10);

  await User.create({
    name: 'Admin',
    email: 'admin@test.com',
    password: hashed,
    role: 'admin',
  });

  console.log('Admin created');
};

module.exports = createAdmin;
