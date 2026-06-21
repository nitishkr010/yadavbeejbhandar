import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    offerPrice: "",
    isOffer: false,
    image: "",
    category: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...product,
      isOffer: product.isOffer === "true",
    };

    const res = await fetch(
      "http://localhost:5000/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    const data = await res.json();

    alert("Product Added Successfully");

    console.log(data);

    setProduct({
      name: "",
      price: "",
      offerPrice: "",
      isOffer: false,
      image: "",
      category: "",
      stock: "",
      description: "",
    });
  };

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="offerPrice"
            placeholder="Offer Price"
            value={product.offerPrice}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <select
            name="isOffer"
            value={product.isOffer}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="false">
              No Offer
            </option>

            <option value="true">
              Offer Product
            </option>
          </select>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          >
            <option value="">
              Select Category
            </option>

            <option value="Seeds">
              Seeds
            </option>

            <option value="Fertilizer">
              Fertilizer
            </option>

            <option value="Organic">
              Organic
            </option>

            <option value="Tools">
              Tools & Equipment
            </option>
          </select>

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded"
          >
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddProduct;