const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all the products
router.get('/', productController.products);

// Create a new Product
router.post('/create', productController.createProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);
router.post("/:id/update_quantity", productController.updateQuantity);

module.exports = router;
