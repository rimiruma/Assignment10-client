import { motion } from "framer-motion";

const FloatingSection = () => {
  return (
    <section className="relative bg-blue-50 dark:bg-gray-900 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Dream <span className="text-orange-500">Property</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore premium apartments, villas, and homes in the best locations with verified listings.
          </p>
          <button className="btn btn-outline hover:text-white hover:bg-orange-500 px-20 py-3 rounded-lg font-semibold transition">
            Explore Now
          </button>
        </div>

        {/* Floating Image */}
        <div className="lg:w-1/2 relative w-full flex justify-center">
          <motion.img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Luxury Property"
            className="w-80 lg:w-[400px] rounded-xl shadow-lg"
            animate={{ y: [0, -20, 0] }}        // Floating animation
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Extra floating smaller images (optional) */}
          <motion.img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Family House"
            className="w-40 absolute top-0 left-0 rounded-xl shadow-md"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <motion.img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
            alt="Premium Interior"
            className="w-32 absolute bottom-0 right-10 rounded-xl shadow-md"
            animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FloatingSection;
