const express = require('express');
const router = express.Router();
const uploadController = require('../controller/uploadController');

// Route POST /upload
router.post('/', uploadController.uploadImage);

module.exports = router;
