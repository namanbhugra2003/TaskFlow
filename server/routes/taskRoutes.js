const router = require('express').Router();
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const {
  createTask,
  updateTaskStatus,
  getMyTasks
} = require('../controllers/taskController');

router.post('/', protect, authorizeRoles('manager'), createTask);
router.put('/:id', protect, authorizeRoles('user', 'manager'), updateTaskStatus);
router.get("/my", protect, authorizeRoles("user"), getMyTasks);

module.exports = router;
