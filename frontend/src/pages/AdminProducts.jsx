import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const fetchProducts = async () => {
    const res = await fetch(
      "http://localhost:5000/api/products"
    );

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await fetch(
      `http://localhost:5000/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchProducts();
  };

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          Admin Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {product.name}
                </h3>

                <p className="text-green-700 font-bold">
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

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
                  >
                    Delete Product
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/edit-product/${product._id}`)
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                  >
                    Edit Product
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default AdminProducts;