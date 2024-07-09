const express = require('express');
const asyncHandler = require('express-async-handler');
const {registerUser, loginUser} = require('../controllers/auth.js');

const router = express.Router();

router.post('/register', asyncHandler(registerUser));
router.post('/login', asyncHandler(loginUser));

module.exports = router;