
import { Suspense, use } from "react";
import HomeFeatured from "./HomeFeatured";
import LoadingSpinner from "./LoadingSpinner";


const FeaturedSection = ({ featuredProductsPromise }) => {
    const properties = use(featuredProductsPromise); // use() works with Suspense in React 18+

    return (
        <div className="my-10 px-5">
            <div className="text-center mb-8">
                {/* <h1 className="text-3xl font-bold">Featured Properties</h1> */}
                <h1 className="text-2xl font-bold text-gray-800 text-center dark:text-white">
                    Discover Amazing Properties<br />
                    For Your Dream Home
                </h1>

            </div>
            <Suspense fallback={<LoadingSpinner />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <HomeFeatured key={property._id} property={property} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default FeaturedSection;
