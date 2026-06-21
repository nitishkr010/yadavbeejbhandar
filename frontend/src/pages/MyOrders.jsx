import { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    if (!user) return;

    fetch(
      `http://localhost:5000/api/orders/${user._id}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-green-700 mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <h2 className="text-center text-2xl">
            No Orders Found 📦
          </h2>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow-lg mb-6"
            >
              <h2 className="text-2xl font-bold mb-3">
                Order Status:
                <span className="text-green-700 ml-2">
                  {order.status}
                </span>
              </h2>

              <p className="font-bold mb-4">
                Total: ₹{order.totalAmount}
              </p>

              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 border-b py-4"
                >
                  <img
                    src={item.productId?.image}
                    alt={item.productId?.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      {item.productId?.name}
                    </h3>

                    <p>
                      ₹{item.productId?.price}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default MyOrders;