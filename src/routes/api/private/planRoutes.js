// routes/api/public/stripeRoutes.js
const express = require('express');
const router = express.Router();
const planController = require('../../../controllers/planController.js');

router.post('/create-plan', planController.createPlan);

module.exports = router;