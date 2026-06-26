import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaPhoneAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/products?search=${search}`);
  };
  


  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm hidden md:block">
       <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center gap-4 justify-between">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Harigaon, Bhojpur, Bihar</span>
          </div>

          <div className="flex gap-6">
            <span className="cursor-pointer">Download App</span>
            <span className="cursor-pointer">Track Order</span>
            <span className="cursor-pointer">Blog</span>
            <span className="cursor-pointer">Help & Support</span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="block">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-700 leading-none">
           AgriStore
            </h1>

            <h2 className="text-xl font-bold text-red-600">
              Behtar Beej, Behtar Fasal
            </h2>

           
          </Link>

          {/* Search */}
       <div className="flex w-full lg:w-[500px]">
            <input
              type="text"
              placeholder="Search for seeds, fertilizers, pesticides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 px-5 py-3 rounded-l-lg outline-none"
            />

            <button
              onClick={handleSearch}
              className="bg-green-700 text-white px-8 rounded-r-lg hover:bg-green-800"
            >
              <FaSearch />
            </button>
          </div>

          {/* Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <FaPhoneAlt className="text-green-700 text-2xl" />

            <div>
              <p className="text-gray-500 text-sm">
                Call / WhatsApp
              </p>

              <p className="font-bold text-lg">
                +91 8757915227
              </p>
            </div>
          </div>

          {/* Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">

            {/* Login */}
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-center cursor-pointer hover:text-green-700 transition"
                >
                  <FaUser className="text-2xl mx-auto" />
                  <p className="text-sm">{user.name}</p>
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/";
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-center cursor-pointer hover:text-green-700 transition"
                >
                  <FaUser className="text-2xl mx-auto" />
                  <p className="text-sm">Login</p>
                </Link>

                <Link
                  to="/register"
                  className="bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="text-center cursor-pointer relative hover:text-green-700 transition"
            >
              <FaHeart className="text-2xl mx-auto" />

              <span className="absolute -top-2 -right-3 bg-green-700 text-white text-xs px-2 rounded-full">
                0
              </span>

              <p className="text-sm">Wishlist</p>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="text-center cursor-pointer relative hover:text-green-700 transition"
            >
              <FaShoppingCart className="text-2xl mx-auto" />

              <span className="absolute -top-2 -right-3 bg-green-700 text-white text-xs px-2 rounded-full">
                0
              </span>

              <p className="text-sm">Cart</p>
            </Link>
            

          </div>

        </div>
      </div>

      {/* Menu */}
      <div className="bg-green-700 text-white shadow-lg">
       <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-4 md:gap-8 font-medium">

          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/Seeds" className="hover:text-yellow-300">
            Seeds
          </Link>

          <Link to="/Fertilizers" className="hover:text-yellow-300">
            Fertilizers
          </Link>

          <Link to="/products" className="hover:text-yellow-300">
            Products
          </Link>

          <Link to="/organic" className="hover:text-yellow-300">
            Organic
          </Link>

          <Link to="/ToolsEquipment" className="hover:text-yellow-300">
            Tools & Equipments
          </Link>

          <Link to="/offers" className="hover:text-yellow-300">
            Offers
          </Link>

          <Link to="/about" className="hover:text-yellow-300">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-yellow-300">
            Contact Us
          </Link>
          {user?.email === "nitishkr7501@gmail.com" && (
  <Link to="/admin">Admin Dashboard</Link>
)}

        </div>
      </div>

    </div>
  );
};

export default Navbar;