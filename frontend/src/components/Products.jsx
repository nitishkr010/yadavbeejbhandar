import { useEffect, useState } from "react";

const ProductsPages = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/cart/add",
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
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-10 pb-16 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          🛒 Our Products
        </h1>

        {loading ? (
          <h2 className="text-center text-2xl">
            Loading Products...
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

               <div className="p-5">

  <h3 className="font-bold text-lg">
    {product.name}
  </h3>

  <p className="text-green-700 text-xl font-bold mt-2">
    ₹{product.price}
  </p>

  {product.offerPrice && (
    <p className="text-red-600 font-bold">
      Offer Price: ₹{product.offerPrice}
    </p>
  )}

  <p className="text-gray-700 mt-2">
    Category: <b>{product.category}</b>
  </p>

  <p className="text-gray-700">
    Stock:
    <span className="font-bold text-green-600">
      {" "}
      {product.stock}
    </span>
  </p>

  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
    {product.description}
  </p>

  <div className="mt-2 text-yellow-500">
    ⭐⭐⭐⭐⭐
  </div>

  <div className="flex gap-2 mt-5">

    <button
      onClick={() => addToCart(product._id)}
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

export default ProductsPages;