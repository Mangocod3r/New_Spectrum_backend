const express = require('express');
const router = express.Router();
const angelController = require('../controllers/angelController');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get("/investment-history", angelController.getInvestmentHistory);
router.get("/investment-requests", angelController.getInvestmentRequests);
router.get("/pitch-events", angelController.getPitchEvents);
router.put("/investment-requests/:id", angelController.updateInvestmentRequestById);

module.exports = router;
