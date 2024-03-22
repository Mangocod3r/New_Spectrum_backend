const express = require('express');
const router = express.Router();
const entController = require('../controllers/entController');

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)
// POST /prop route
router.post("/create_main", entController.createPost);
router.post("/prop", entController.createProp);

module.exports = router;
