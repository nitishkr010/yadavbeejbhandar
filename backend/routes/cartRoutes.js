const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

router.get("/test", (req, res) => {
  res.send("Cart Route Working");
});
const Product = require("../models/Product");

// Add To Cart
router.post("/add", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const existingItem = await Cart.findOne({
      userId,
      productId,
    });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();

      return res.json({
        message: "Quantity Updated",
      });
    }

    const cartItem = await Cart.create({
      userId,
      productId,
      quantity: 1,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Get User Cart
router.get("/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({
      userId: req.params.userId,
    }).populate("productId");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Remove Cart Item
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Removed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;