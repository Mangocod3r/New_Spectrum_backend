const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

// Define user routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
