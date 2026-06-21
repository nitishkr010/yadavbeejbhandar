import { useEffect, useState } from "react";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      return;
    }

    try {
      const res = await fetch(
        "https://yadavbeejbhandarr.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            productId,
          }),
        }
      );

      if (res.ok) {
        alert("Product Added To Cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(
      "https://yadavbeejbhandarr.onrender.com/api/products/offers/all"
    )
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-60 pb-16 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-4">
          🔥 Special Offers
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Beej, Khaad aur Krishi Products par dhamakedar offers.
        </p>

        {loading ? (
          <h2 className="text-center text-2xl">
            Loading Offers...
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {offers.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover"
                  />

                  <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    OFFER
                  </span>

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-3">

                    <span className="text-gray-500 line-through mr-3">
                      ₹{item.price}
                    </span>

                    <span className="text-green-700 text-2xl font-bold">
                      ₹{item.offerPrice}
                    </span>

                  </div>

                 <p className="text-gray-700 mt-2">
  Category:
  <span className="font-semibold">
    {" "}
    {item.category}
  </span>
</p>

<p className="text-gray-700">
  Stock:
  <span className="font-semibold text-green-600">
    {" "}
    {item.stock}
  </span>
</p>

<p className="text-gray-600 text-sm mt-2">
  {item.description}
</p>

<div className="mt-2 text-yellow-500">
  ⭐⭐⭐⭐⭐
</div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Offers;