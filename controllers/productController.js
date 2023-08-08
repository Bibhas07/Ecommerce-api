const Product = require("../models/productModel");


//show products
exports.products = async (req, res) => {
    try {
        const data = await Product.find({});
        res.send(data);
    } catch (err) {
        res.status(500).send(err);
    }
}

// Add a new product to the database
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    const savedProduct = await product.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding product to the database",
      error: error.message,
    });
  }
};

// Delete a product from the database
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      res.json({
        success: true,
        message: "Product deleted successfully!",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};

exports.updateQuantity = async (req, res) => {
    try {
      const { id } = req.params;
      const { number } = req.query;
  
      if (!Number.isInteger(+number)) {
        return res.status(400).json({
          success: false,
          message: "Invalid quantity value. Please provide a valid number.",
        });
      }
  
      const product = await Product.findById(id);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      // Calculate the new quantity
      const updatedQuantity = product.quantity + +number;
      product.quantity = updatedQuantity;
  
      await product.save();
  
      res.json({
        success: true,
        message: "Quantity updated successfully!",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating quantity",
        error: error.message,
      });
    }
  };
