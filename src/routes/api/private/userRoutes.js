// routes/api/public/stripeRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/userController.js');

router.post('/createUserByAdmin', userController.createUserByAdmin);
router.get('/getUsersByAdmin', userController.getUsersByAdmin);

module.exports = router;