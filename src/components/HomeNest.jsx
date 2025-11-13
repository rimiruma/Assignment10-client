// WhyHomeNest.jsx
import React from "react";
import homeImage from "../assets/banner2.png"; // replace with your image path

const WhyHomeNest = () => {
    return (
        <section className="bg-gray-50 py-16 dark:bg-gray-800">
            <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10">
                
                {/* Text Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">
                        Why <span className="text-orange-500">HomeNest?</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-justify dark:text-white">
                        We believe customer care in the hospitality industry is everything. Hence we always strive 
                        to deliver best customer service with consistency and high quality. We promise a great 
                        experience for our customer by providing clean rooms, friendly staff, and excellent services. 
                        Also, we promote a positive, helpful, and friendly environment to ensure that our customer 
                        leaves with a great impression. Not only will you appreciate this wonderful serviced 
                        apartment, you can also benefit from being in the center of this vibrant city with everything 
                        you need within reach.
                    </p>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img
                        src={homeImage}
                        alt="HomeNest"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyHomeNest;
