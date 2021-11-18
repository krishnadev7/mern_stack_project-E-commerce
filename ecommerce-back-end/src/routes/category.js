const express = require('express');

const category = require('../models/category');
const { addCategory } = require('../controller/category');
const router = express.Router();

router.post('/category/create', addCategory);
module.exports = router;