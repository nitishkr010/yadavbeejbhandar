import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-60 pb-16 bg-green-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Humse sampark karein, hum aapki madad ke liye hamesha tayyar hain.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-700 text-xl" />
                <span>+91 8757915227</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-700 text-xl" />
                <span>info@yadavbeejbhandar.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-700 text-xl" />
                <span>Harigaon, Bhojpur, Bihar</span>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Send Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;