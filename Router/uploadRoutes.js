const express = require('express');
const router = express.Router();
const uploadController = require('../Controller/uploadController');

// Route POST /upload
router.post('/', uploadController.uploadImage);

module.exports = router;
