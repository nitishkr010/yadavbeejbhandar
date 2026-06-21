import { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://yadavbeejbhandarr.onrender.com/api/admin/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const updateStatus = async (
    orderId,
    status
  ) => {
    try {
      await fetch(
        `https://yadavbeejbhandarr.onrender.com/api/admin/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId
            ? { ...order, status }
            : order
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await fetch(
        `https://yadavbeejbhandarr.onrender.com/api/admin/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      setOrders((prev) =>
        prev.filter(
          (order) => order._id !== orderId
        )
      );

      alert("Order Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-green-700 mb-10">
          All Orders
        </h1>

        {orders.length === 0 ? (
          <h2 className="text-center text-2xl">
            No Orders Found
          </h2>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow-lg mb-6"
            >
              <h2 className="text-2xl font-bold">
                Customer: {order.userId?.name}
              </h2>

              <p>
                Email: {order.userId?.email}
              </p>

              {/* Shipping Address */}
              <div className="mt-3 bg-gray-100 p-3 rounded">
                <h3 className="font-bold text-green-700">
                  Shipping Address
                </h3>

                <p>
                  Name:{" "}
                  {order.shippingAddress?.fullName}
                </p>

                <p>
                  Mobile:{" "}
                  {order.shippingAddress?.mobile}
                </p>

                <p>
                  Address:{" "}
                  {order.shippingAddress?.address}
                </p>

                <p>
                  City:{" "}
                  {order.shippingAddress?.city}
                </p>

                <p>
                  State:{" "}
                  {order.shippingAddress?.state}
                </p>

                <p>
                  Pincode:{" "}
                  {order.shippingAddress?.pincode}
                </p>
              </div>

              <p className="font-bold mt-3">
                Total: ₹{order.totalAmount}
              </p>

              {/* Status + Delete */}
              <div className="mt-4 flex items-center gap-3">

                <select
                  value={order.status}
                  onChange={(e) =>
                    updateStatus(
                      order._id,
                      e.target.value
                    )
                  }
                  className="border p-2 rounded"
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Shipped">
                    Shipped
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>
                </select>

                <button
                  onClick={() =>
                    deleteOrder(order._id)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete Order
                </button>

              </div>

              {/* Ordered Products */}
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 mt-4 border-t pt-4"
                >
                  <img
                    src={item.productId?.image}
                    alt={item.productId?.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-bold">
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

export default AdminOrders;