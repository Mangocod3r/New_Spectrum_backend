const express = require('express');
const router = express.Router();
const entController = require('../controllers/entController');

// POST /prop route
router.post("/create_main", entController.createPost);
router.post("/prop", entController.createProp);

module.exports = router;
