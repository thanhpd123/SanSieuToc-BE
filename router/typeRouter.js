const express = require('express');
const router = express.Router();
const { getAllType } = require('../controller/typeController');

router.get('/', getAllType);

module.exports = router;
