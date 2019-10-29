const express = require('express');
const controller = require('../controllers/position');

const router = express.Router();

router.get('/:categoryId', controller.getByCategoryId);
router.post('/', controller.create);
router.patch('/:categoryId', controller.update);
router.delete('/:categoryId', controller.delete);

module.exports = router;