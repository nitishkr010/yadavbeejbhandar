const wishlistItems = [
  {
    id: 1,
    name: "HD-2967 Wheat Seed",
    price: "₹450",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
  },
  {
    id: 2,
    name: "DAP Fertilizer",
    price: "₹1350",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800",
  },
  {
    id: 1,
    name: "HD-2967 Wheat Seed",
    price: "₹450",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
  },
  {
    id: 2,
    name: "DAP Fertilizer",
    price: "₹1350",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800",
  },
];

const Wishlist = () => {
  return (
    <div className="pt-60 pb-16 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          ❤️ My Wishlist
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-green-700 text-xl font-bold mt-2">
                  {item.price}
                </p>

                <button className="w-full mt-4 bg-green-700 text-white py-2 rounded-lg">
                  Add To Cart
                </button>

                <button className="w-full mt-2 border border-red-500 text-red-500 py-2 rounded-lg">
                  Remove
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Wishlist;