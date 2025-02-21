// routes/api/private/index.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../../middlewares/authMiddleware')

// Import individual route files
const planRoutes = require('./planRoutes');
const userRoutes = require('./userRoutes');

router.use('/plan', authMiddleware(['admin']), planRoutes);
router.use('/user', authMiddleware(['admin']), userRoutes);

module.exports = router;
