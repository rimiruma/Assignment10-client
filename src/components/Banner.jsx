import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bannerImage1 from "../assets/banner1.png";
import bannerImage2 from "../assets/banner2.png";
import bannerImage3 from "../assets/banner3.png";
import bannerImage6 from "../assets/bannerImage6.png";

const Banner = () => {
    return (
        <div className="py-10">

            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                className="w-full lg:w-[100%] h-[350px] lg:h-[400px] mx-auto rounded-lg shadow-lg"
            >
                <SwiperSlide className="relative">
                    <img
                        src={bannerImage1}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Slide 1"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">Beautiful Homes</h2>
                        <p className="mt-2 text-sm lg:text-lg">
                            Find the perfect place to live your dream life.
                        </p>
                        <button className="btn btn-primary px-10 mt-4">View More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={bannerImage2} className="w-full h-full object-cover rounded-lg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">Luxury Apartments</h2>
                        <p className="mt-2 text-sm lg:text-lg">
                            Experience comfort and style like never before.
                        </p>
                        <button className="btn btn-primary px-10 mt-4">See Details</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={bannerImage3} className="w-full h-full object-cover rounded-lg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">Beach Houses</h2>
                        <p className="mt-2 text-sm lg:text-lg">
                            Wake up every day with a sea view.
                        </p>
                        <button className="btn btn-primary px-10 mt-4">Explore</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={bannerImage6} className="w-full h-full object-cover rounded-lg" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">Commercial Properties</h2>
                        <p className="mt-2 text-sm lg:text-lg">
                            Grow your business with the perfect location.
                        </p>
                        <button className="btn btn-primary px-10 mt-4">Get Started</button>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;


