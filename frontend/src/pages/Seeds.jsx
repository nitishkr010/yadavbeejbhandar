import { useEffect, useState } from "react";

const Seeds = () => {
  const [seeds, setSeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(
      "https://yadavbeejbhandarr.onrender.com/api/products?category=Seeds"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeeds(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
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

      const data = await res.json();

      if (res.ok) {
        alert("✅ Product Added To Cart");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="pt-72 lg:pt-60 pb-16 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-green-700 mb-4">
          🌾 Seeds Collection
        </h1>

        <p className="text-center text-gray-600 mb-12">
          High Quality Seeds For Better Harvest
        </p>

        {loading ? (
          <h2 className="text-center text-2xl">
            Loading Products...
          </h2>
        ) : (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {seeds.map((seed) => (
              <div
                key={seed._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={
                    seed.image ||
                    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
                  }
                  alt={seed.name}
                  className="h-48 md:h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-lg">
                    {seed.name}
                  </h3>

                  <p className="text-green-700 text-xl font-bold mt-2">
                    ₹{seed.price}
                  </p>

                  {seed.offerPrice && (
                    <p className="text-red-600 font-bold text-lg">
                      Offer Price: ₹{seed.offerPrice}
                    </p>
                  )}

                  <p className="text-gray-700 mt-2">
                    Category:
                    <span className="font-semibold">
                      {" "}
                      {seed.category}
                    </span>
                  </p>

                  <p className="text-gray-700">
                    Stock:
                    <span className="font-semibold text-green-600">
                      {" "}
                      {seed.stock}
                    </span>
                  </p>

                  <p className="text-gray-600 text-sm mt-2">
                    {seed.description}
                  </p>

                  <div className="mt-2 text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-5">

                    <button
                      onClick={() => addToCart(seed._id)}
                      className="w-1/2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
                    >
                      Add To Cart
                    </button>

                    <button
                      className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >
                      Buy Now
                    </button>

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

export default Seeds;