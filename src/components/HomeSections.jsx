import Aos from "aos";
import { useEffect } from "react";

const HomeSections = () => {

    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">

      

      {/* 🔹 Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            data-aos="fade-right"
            className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          >
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-aos="fade-up" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl">Trusted Properties</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Verified listings with legal documents
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl">Affordable Price</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Best price guaranteed for buyers
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl">Prime Location</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Properties in popular city areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Statistics Section */}
      <section className="py-16 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div data-aos="zoom-in">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p>Properties</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="150">
            <h3 className="text-3xl font-bold text-blue-600">300+</h3>
            <p>Happy Clients</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p>Cities</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="450">
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-20 bg-orange-300 dark:bg-gray-800 text-white text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold">
          Ready to Buy or Rent a Property?
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-3">
          Join us today and explore the best properties
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-6 btn dark:text-white text-black px-16 btn-outline hover:bg-orange-500 hover:text-white py-3 rounded-lg font-semibold"
        >
          My Properties
        </button>
      </section>

    </div>
  );
};

export default HomeSections;
