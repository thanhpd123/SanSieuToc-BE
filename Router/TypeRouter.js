const express = require('express');
const router = express.Router();
const { getAllType } = require('../controller/TypeController');

router.get('/', getAllType);

module.exports = router;
