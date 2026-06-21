import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />

      <About />

      <Categories />

      <Products />

      <Contact />

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Our Location
          </h2>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Yadav Beej Bhandar Location"
              src="https://www.google.com/maps?q=Harigaon,Bhojpur,Bihar&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;