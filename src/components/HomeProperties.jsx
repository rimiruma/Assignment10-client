const HomeProperties = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16">

      {/* Page Title */}
      <div className="text-center mb-12">
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Featured <span className="text-orange-500">Properties</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-3 text-gray-600 dark:text-gray-400"
        >
          Explore our handpicked premium properties
        </p>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Property"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Luxury Apartment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Dhaka, Bangladesh
            </p>
            <p className="mt-3 font-bold text-blue-600">
              ৳ 1,20,00,000
            </p>
            <button className="mt-4 w-full btn btn-outline hover:bg-orange-500 hover:text-white py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Property"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Luxury Apartment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Dhaka, Bangladesh
            </p>
            <p className="mt-3 font-bold text-blue-600">
              ৳ 1,20,00,000
            </p>
            <button className="mt-4 w-full btn btn-outline hover:bg-orange-500 hover:text-white py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Property"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Modern Family House
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Chattogram
            </p>
            <p className="mt-3 font-bold text-blue-600">
              ৳ 95,00,000
            </p>
            <button className="mt-4 w-full btn btn-outline hover:bg-orange-500 hover:text-white py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
            alt="Property"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Premium Interior Flat
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sylhet
            </p>
            <p className="mt-3 font-bold text-blue-600">
              ৳ 80,00,000
            </p>
            <button className="mt-4 w-full btn btn-outline hover:bg-orange-500 hover:text-white py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeProperties;
