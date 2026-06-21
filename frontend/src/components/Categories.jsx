const categories = [
  {
    name: "Seeds",
    icon: "🌾",
  },
  {
    name: "Fertilizers",
    icon: "🌱",
  },
  {
    name: "Pesticides",
    icon: "🧪",
  },
  {
    name: "Tools",
    icon: "🚜",
  },
  {
    name: "Organic",
    icon: "🌿",
  },
  {
    name: "Irrigation",
    icon: "💧",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 hover:bg-green-100 p-6 rounded-xl text-center shadow cursor-pointer transition"
            >
              <div className="text-5xl mb-3">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;