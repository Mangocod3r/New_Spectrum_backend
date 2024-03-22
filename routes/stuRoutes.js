const express = require('express');
const router = express.Router();
const stuController = require('../controllers/stuController');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

// Routes for stu model
router.post('/stu_km', stuController.createStu);
router.get('stu_id', stuController.getAllStu);
router.get('/stu_ideas', stuController.getAllStuIdeas);
router.get('/stu_ideas/:header', stuController.getAllStuIdeasByHeader);
router.put('/stu_ideas/:id', stuController.updateStuIdea);

module.exports = router;
