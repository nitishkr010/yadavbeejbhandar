const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Order = require("../models/Order");

// ======================
// Get All Users
// ======================
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ======================
// Get All Orders
// ======================
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// ======================
// delete order through admin 
// ======================
router.delete("/orders/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ======================
// Update Order Status
// ======================
router.put("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ======================
// Dashboard Stats
// ======================
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.totalAmount,
      0
    );

    res.json({
      totalUsers,
      totalOrders,
      totalRevenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;