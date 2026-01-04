import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="Property"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h5 className="text-orange-500 dark:text-orange-500 mb-2 font-semibold">
            About Us
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Your Trusted Property Partner
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            We are a professional real estate platform dedicated to helping you
            find the perfect home, apartment, or commercial property with ease
            and confidence.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Our mission is to connect buyers, sellers, and renters through a
            transparent and secure property marketplace powered by modern
            technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                5K+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Properties
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                2K+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                10+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
