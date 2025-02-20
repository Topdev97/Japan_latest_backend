// routes/index.js

const express = require('express');
const router = express.Router();



// Public Routes
const publicApiRoutes = require('./api/public');
router.use('/api/public', publicApiRoutes);

// Private Routes
const privateApiRoutes = require('./api/private');
router.use('/api/private', privateApiRoutes);

module.exports = router;