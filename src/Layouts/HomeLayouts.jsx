
import PropertyGallery from "../components/PropertyGallery";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import WhyHomeNest from "../components/HomeNest";
import OurFacilities from "../components/OurFacilities";
import HomeSections from "../components/HomeSections";

const featuredProductsPromise = fetch('https://assignment10-server-zeta.vercel.app/featured-properties')
    .then(res => res.json());

const HomeLayouts = () => {
    return (
        <div>
            <Banner />
            <OurFacilities></OurFacilities>
            <FeaturedSection featuredProductsPromise={featuredProductsPromise} />
            <WhyHomeNest></WhyHomeNest>
            <PropertyGallery></PropertyGallery>
            <HomeSections></HomeSections>
        </div>
    );
};

export default HomeLayouts;
