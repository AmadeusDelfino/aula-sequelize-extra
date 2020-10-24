var express = require('express');
var router = express.Router();
const SalesController = require('../controllers/SalesController')

router.post('/checkout', SalesController.index)

module.exports = router;