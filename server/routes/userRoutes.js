const router = require('express').Router();
const { createUser, getAllUsers,getOnlyUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

router.get('/employees', protect, authorizeRoles('manager'), getOnlyUsers);

router.post('/', protect, authorizeRoles('admin'), createUser);
router.get('/', protect, authorizeRoles('admin'), getAllUsers);

module.exports = router;
