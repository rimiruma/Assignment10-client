import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Properties",
    description: "All listings are verified with legal documents.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Prime Locations",
    description: "Properties available in popular city areas.",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
  {
    title: "Affordable Prices",
    description: "Get the best deals and prices in the market.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Features
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Why our properties are perfect for you
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow relative overflow-hidden"
            animate={{ y: [0, -15, 0] }}      // floating animation
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,              // stagger effect
            }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
