require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db');
require('./models');

const createAdmin = require('./utils/createAdmin');

sequelize.sync({ alter: true }).then(async () => {
  await createAdmin();

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
