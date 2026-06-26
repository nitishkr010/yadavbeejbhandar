const Hero = () => {
  return (
    <section className="pt-50 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              🌱 Trusted By Farmers
            </span>

            <h1 className="mt-6 text-6xl font-extrabold text-green-800 leading-tight">
              Quality Seeds For
              <br />
              Better Harvest
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
                AgriStore me milega premium quality seeds,
              fertilizers aur pesticides. Apni fasal ki paidawar badhayein
              aur behtar kheti karein.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold">
                Shop Now
              </button>

              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white">
                Contact Us
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-green-700">500+</h3>
                <p className="text-gray-600">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">1000+</h3>
                <p className="text-gray-600">Farmers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="shopimage2.png"
              alt="ShopImage1"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;