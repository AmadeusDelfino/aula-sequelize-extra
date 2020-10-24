var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/UsersController')
const SalesController = require('../controllers/SalesController')

router.get('/', UsersController.all)
router.post('/', UsersController.create)
router.delete('/:id', UsersController.delete)
router.put('/:id', UsersController.update)
router.get('/search', UsersController.search)
router.post('/cart/checkout', SalesController.index)

module.exports = router;