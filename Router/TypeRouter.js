const express = require('express');
const router = express.Router();
const { getAllType } = require('../Controller/TypeController');

router.get('/', getAllType);

module.exports = router;
