var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/UsersController')

router.get('/', UsersController.all)
router.post('/', UsersController.create)
router.delete('/:id', UsersController.delete)
router.put('/:id', UsersController.update)

module.exports = router;