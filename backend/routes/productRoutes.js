const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get Products (All + Category Wise)
router.get("/", async (req, res) => {
  try {
    const category = req.query.category;

    let products;

    if (category) {
      products = await Product.find({
        category,
      });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Offer Products
router.get("/offers/all", async (req, res) => {
  try {
    const products = await Product.find({
      isOffer: true,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Single Product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Add Product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(
      req.body
    );

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;