const express = require('express');
const router = express.Router();
const angelController = require('../controllers/angelController');

router.get("/investment-history", angelController.getInvestmentHistory);
router.get("/investment-requests", angelController.getInvestmentRequests);
router.get("/pitch-events", angelController.getPitchEvents);
router.put("/investment-requests/:id", angelController.updateInvestmentRequestById);

module.exports = router;
