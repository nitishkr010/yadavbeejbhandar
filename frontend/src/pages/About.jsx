const About = () => {
  return (
    <div className="pt-60 pb-16 bg-green-50 min-h-l-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700">
            About Us
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
             AgriStore - Behtar Beej, Behtar Fasal
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt="Farm"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Welcome To   AgriStore
            </h2>

            <p className="text-gray-700 leading-8">
                AgriStore Harigaon, Bhojpur, Bihar me sthit ek
              vishwasniya krishi dukaan hai. Hum kisano ko uchch gunwatta
              wale beej, khaad, pesticide aur krishi upkaran uplabdh karate hain.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Hamara uddeshya kisano ko behtar utpaad aur sahi margdarshan
              dekar unki paidawar badhana hai.
            </p>

            <div className="mt-6">
              <ul className="space-y-3">
                <li>✅ High Quality Seeds</li>
                <li>✅ Genuine Fertilizers</li>
                <li>✅ Trusted Products</li>
                <li>✅ Farmer Support</li>
                <li>✅ Fast Delivery</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-green-700">
                🌱 Quality Products
              </h3>

              <p className="mt-4 text-gray-600">
                Hum sirf original aur quality products provide karte hain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-green-700">
                🚚 Fast Delivery
              </h3>

              <p className="mt-4 text-gray-600">
                Products ko jaldi aur surakshit tarike se pahuchate hain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-green-700">
                👨‍🌾 Farmer Support
              </h3>

              <p className="mt-4 text-gray-600">
                Kisano ki madad aur salah ke liye hamesha tayyar.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;