const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Cart = require("../models/Cart");

router.post("/place", async (req, res) => {
  try {
   const {
  userId,
  shippingAddress,
} = req.body;

    const cartItems = await Cart.find({
      userId,
    }).populate("productId");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart Empty",
      });
    }

    const totalAmount = cartItems.reduce(
      (total, item) =>
        total +
        item.productId.price *
          item.quantity,
      0
    );

   const order = await Order.create({
  userId,

  items: cartItems.map((item) => ({
    productId: item.productId._id,
    quantity: item.quantity,
  })),

  totalAmount,

  shippingAddress,
});
    await Cart.deleteMany({ userId });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// User Orders
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({
    userId: req.params.userId,
  })
    .populate("items.productId")
    .sort({ createdAt: -1 });

  res.json(orders);
});

module.exports = router;