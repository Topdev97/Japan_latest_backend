// routes/api/public/index.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes'); // Import user routes

router.use('/user', userRoutes);

module.exports = router;