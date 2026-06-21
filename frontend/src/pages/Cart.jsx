import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState({
  fullName: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
});

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    if (!user) return;

    fetch(
      `https://yadavbeejbhandarr.onrender.com/api/cart/${user._id}`
    )
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.log(err));
  }, [user]);

  const removeFromCart = async (cartId) => {
    try {
      await fetch(
        `https://yadavbeejbhandarr.onrender.com/api/cart/${cartId}`,
        {
          method: "DELETE",
        }
      );

      setCartItems((prev) =>
        prev.filter(
          (item) => item._id !== cartId
        )
      );

      alert("Item Removed Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      (Number(item.productId?.price) || 0) *
        item.quantity,
    0
  );

  const checkout = async () => {
  if (cartItems.length === 0) {
    alert("Cart is Empty");
    return;
  }

  try {
    const res = await fetch(
      "https://yadavbeejbhandarr.onrender.com/api/orders/place",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  userId: user._id,
  shippingAddress: address,
}),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert(
      `Order Placed Successfully!\nTotal Amount: ₹${totalAmount}`
    );

    // Cart Empty After Order
    setCartItems([]);
  } catch (error) {
    console.log(error);
    alert("Order Failed");
  }
};

  if (!user) {
    return (
      <div className="pt-60 text-center text-2xl">
        Please Login First
      </div>
    );
  }

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-green-700 mb-10">
          My Cart
        </h1>

        {cartItems.length === 0 ? (
          <h2 className="text-center text-2xl">
            Cart is Empty 🛒
          </h2>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg p-5 mb-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-5">

                  <img
                    src={item.productId?.image}
                    alt={item.productId?.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.productId?.name}
                    </h2>

                    <p className="text-green-700 text-xl font-bold mt-2">
                      ₹{item.productId?.price}
                    </p>

                    <p className="mt-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-white p-6 rounded-xl shadow-lg mt-8 text-right">

              <h2 className="text-4xl font-bold text-green-700">
                Total: ₹{totalAmount}
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-lg mt-8 mb-5">
  <h2 className="text-2xl font-bold mb-4">
    Shipping Address
  </h2>

 <input
  type="text"
  placeholder="Full Name"
  value={address.fullName}
  onChange={(e) =>
    setAddress({
      ...address,
      fullName: e.target.value,
    })
  }
  className="w-full border p-3 rounded mb-3"
/>

  <input
  type="text"
  placeholder="Mobile Number"
  value={address.mobile}
  onChange={(e) =>
    setAddress({
      ...address,
      mobile: e.target.value,
    })
  }
  className="w-full border p-3 rounded mb-3"
/>

  <textarea
  placeholder="Full Address"
  value={address.address}
  onChange={(e) =>
    setAddress({
      ...address,
      address: e.target.value,
    })
  }
  className="w-full border p-3 rounded mb-3"
/>

 <input
  type="text"
  placeholder="City"
  value={address.city}
  onChange={(e) =>
    setAddress({
      ...address,
      city: e.target.value,
    })
  }
  className="w-full border p-3 rounded mb-3"
/>
  <input
  type="text"
  placeholder="State"
  value={address.state}
  onChange={(e) =>
    setAddress({
      ...address,
      state: e.target.value,
    })
  }
  className="w-full border p-3 rounded mb-3"
/>

  <input
  type="text"
  placeholder="Pincode"
  value={address.pincode}
  onChange={(e) =>
    setAddress({
      ...address,
      pincode: e.target.value,
    })
  }
  className="w-full border p-3 rounded"
/>
</div>

              <button
                onClick={checkout}
                className="mt-4 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg"
              >
                Pay For Orders
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;