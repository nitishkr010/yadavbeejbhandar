import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-5xl font-bold text-green-700">
            Welcome {user?.name}
          </h1>

          <p className="text-2xl mt-4">
            Email: {user?.email}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link
            to="/cart"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-green-700">
              🛒 My Cart
            </h2>
          </Link>

          <Link
            to="/wishlist"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-red-500">
              ❤️ Wishlist
            </h2>
          </Link>

          <Link
            to="/orders"
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              📦 My Orders
            </h2>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Profile;