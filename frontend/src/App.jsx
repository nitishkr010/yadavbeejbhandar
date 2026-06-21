import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ProductsPages from "./pages/ProductsPages";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Organic from "./pages/Organic";
import ToolsEquipment from "./pages/ToolsEquipment";
import Seeds from "./pages/Seeds"
import Fertilizers from "./pages/Fertilizers";
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import AddProducts from "./pages/AddProducts"
import AdminProducts from "./pages/AdminProducts";
import EditProduct from "./pages/EditProduct";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";
import AdminUsers from "./pages/AdminUsers"



function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPages />} />
          <Route path="/About" element={<About />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Organic" element={<Organic />} />
          <Route path="/ToolsEquipment" element={<ToolsEquipment />} />
          <Route path="/Seeds" element={<Seeds />} />
          <Route path="/Fertilizers" element={<Fertilizers />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-product/:id" element={<EditProduct />}/>
           <Route path="/orders" element={<MyOrders />}/>
           <Route path="/admin-orders" element={<AdminOrders />}/>
            <Route path="/admin-Dashboard" element={<AdminDashboard />}/>
            <Route path="/admin-users" element={<AdminUsers />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;