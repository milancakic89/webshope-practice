const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-products', adminController.getEditProducts);

router.post('/delete-product');
router.post('/update-product', adminController.postUpdateSingle);
router.get('/edit-product/:productId', adminController.getEditSingle);

module.exports = router;