const express = require('express');
const controller = require('../controllers/order');
const router = express.Router();

// get /api/order
router.get('/', controller.getAll);

// get /api/order
router.post('/', controller.create);

module.exports = router;