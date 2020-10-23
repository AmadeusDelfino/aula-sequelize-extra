var express = require('express');
var router = express.Router();
const productController = require('../controllers/ProductController');

router.post('/create', productController.store)
router.put('/update/:product_id', productController.update)
router.get('/show/:product_id', productController.show)
router.delete('/delete/:product_id', productController.destroy)
router.get('/', productController.read)

module.exports = router;
