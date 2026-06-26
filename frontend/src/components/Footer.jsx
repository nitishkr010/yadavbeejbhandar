import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold">
              AgriStore
          </h2>

          <p className="mt-4 text-gray-300">
            Premium Seeds, Fertilizers and Pesticides for
            better farming and higher productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Offers</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Categories
          </h3>

          <ul className="space-y-2">
            <li>Seeds</li>
            <li>Fertilizers</li>
            <li>Pesticides</li>
            <li>Organic Products</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <p>📍Harigaon,Bhojpur,Bihar</p>
          <p>📞 +91 8757915227</p>
          <p>✉️ info@AgriStore.com</p>

          <div className="flex gap-4 mt-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <div className="border-t border-green-700 text-center py-4">
        © 2026   AgriStore. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;