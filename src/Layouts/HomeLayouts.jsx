
import PropertyGallery from "../components/PropertyGallery";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import WhyHomeNest from "../components/HomeNest";
import OurFacilities from "../components/OurFacilities";
import HomeSections from "../components/HomeSections";
import HomeProperties from "../components/HomeProperties";
import FloatingSection from "../components/FloatingSection";
import Features from "../components/Features";

const featuredProductsPromise = fetch('http://localhost:3000/featured-properties')
    .then(res => res.json());

const HomeLayouts = () => {
    return (
        <div>
            <Banner />
            <OurFacilities></OurFacilities>
            <Features></Features>
            <FeaturedSection featuredProductsPromise={featuredProductsPromise} />
            <WhyHomeNest></WhyHomeNest>
            <PropertyGallery></PropertyGallery>
            <HomeSections></HomeSections>
            <HomeProperties></HomeProperties>
            <FloatingSection></FloatingSection>
            
        </div>
    );
};

export default HomeLayouts;
