// routes/api/private/index.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../../middlewares/authMiddleware')

// Import individual route files
const planRoutes = require('./planRoutes');

router.use('/plan', authMiddleware(['admin']), planRoutes);

module.exports = router;
