const router = require('express').Router();
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const {
  createProject,
  getAllProjects,
} = require('../controllers/projectcontroller');

router.post('/', protect, authorizeRoles('manager'), createProject);
router.get('/', protect, getAllProjects);

module.exports = router;
