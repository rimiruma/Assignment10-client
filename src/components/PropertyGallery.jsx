import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Luxury Apartment",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/wF2PTN7K/image1.jpg",
    title: "Modern Villa",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Family House",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    title: "Premium Interior",
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/FqLxwCvM/imag3.jpg",
    title: "Real Estate View",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Urban Living",
  },
  {
    id: 7,
    url: "https://i.ibb.co.com/23QL9N9k/image2.jpg",
    title: "City Apartment",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
    title: "Smart Living",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PropertyGallery = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Property <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore premium properties with modern design and prime locations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PropertyGallery;
