const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/cart', shopController.getCart);
router.get('/', shopController.getShop);
router.post('/',shopController.postShop);
router.get('/details/:productId', shopController.getDetailsPage);


module.exports = router;