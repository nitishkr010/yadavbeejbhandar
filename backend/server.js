const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// Product Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

const orderRoutes = require("./routes/orderRoutes");



app.use("/api/orders", orderRoutes);

const Product = require("./models/Product");
const adminRoutes = require(
  "./routes/adminRoutes"
);

app.use(
  "/api/admin",
  adminRoutes
);



app.get("/", (req, res) => {
  res.send("🌾 Yadav Beej Bhandar API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});