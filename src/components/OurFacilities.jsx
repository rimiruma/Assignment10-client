import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import facilityImage from '../assets/banner2.png' // replace with your image path

const OurFacilities = () => {
  const facilities = [
    "Your stay 24 hours from arrival",
    "Housekeeping services",
    "Complimentary delicious breakfast",
    "Customized homemade food at the terrace pantry",
    "24 hour check out",
    "Buddha Bites - Authentic Chinese Restaurant - attached to HomeNest",
    "New Look Beauty Parlour",
    "Situated at the center of the city"
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Our Facilities <span className="text-yellow-500">Includes</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Budget prices but no compromise on facilities. We promise to make your stay a comfortable and memorable experience.
          </p>

          <ul className="space-y-3">
            {facilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={facilityImage}
            alt="Facilities"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default OurFacilities;
