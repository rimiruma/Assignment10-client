import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto mt-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-orange-500 mb-4">
            Get In Touch With Our Property Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about buying, selling, or renting property?  
            Our team is ready to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Office Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                House 21, Road 7, Dhanmondi, Dhaka
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                +880 1234 567 890
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                support@propertyhub.com
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg hover:bg-orange-500 hover:text-white btn-outline btn font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
