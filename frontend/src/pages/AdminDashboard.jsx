
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });
  const user = JSON.parse(localStorage.getItem("user"));

if (user?.email !== "nitishkr7501@gmail.com") {
  return <h1>Access Denied</h1>;
}

  useEffect(() => {
    fetch("https://yadavbeejbhandarr.onrender.com/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          Admin Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              {stats.totalUsers}
            </h2>
            <p className="text-gray-600">
              Total Users
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-green-600">
              {stats.totalOrders}
            </h2>
            <p className="text-gray-600">
              Total Orders
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-red-600">
              ₹{stats.totalRevenue}
            </h2>
            <p className="text-gray-600">
              Total Revenue
            </p>
          </div>

        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Link
            to="/add-product"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">
              Add Product
            </h2>
          </Link>

          <Link
            to="/admin-products"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">
              All Products
            </h2>
          </Link>

          <Link
            to="/admin-orders"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">
              Orders
            </h2>
          </Link>

          <Link
            to="/admin-users"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">
              Users
            </h2>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;