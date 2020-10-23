var express = require('express');
var router = express.Router();
const registerController = require('../controllers/RegisterController')
const loginController = require('../controllers/LoginController')


router.post('/register', registerController.create)
router.post('/login', loginController.login)
router.put('/:user_id', registerController.update)
router.delete('/:user_id', registerController.delete)


module.exports = router;
