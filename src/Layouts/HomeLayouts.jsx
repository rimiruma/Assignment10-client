import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import WhyHomeNest from "../components/HomeNest";
import OurFacilities from "../components/OurFacilities";

const featuredProductsPromise = fetch('http://localhost:3000/featured-properties')
    .then(res => res.json());

const HomeLayouts = () => {
    return (
        <div>
            <Banner />
            <OurFacilities></OurFacilities>
            <FeaturedSection featuredProductsPromise={featuredProductsPromise} />
            <WhyHomeNest></WhyHomeNest>
        </div>
    );
};

export default HomeLayouts;
