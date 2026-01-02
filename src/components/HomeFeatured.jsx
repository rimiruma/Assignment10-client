import { Link } from "react-router";

const HomeFeatured = ({ property }) => {
    const { _id, image, name, description, location, price } = property;

    return (
        <div className="card bg-white w-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <figure className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </figure>

            <div className="card-body p-5 dark:bg-gray-800">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p className="text-gray-600 line-clamp-3 dark:text-white">{description}</p>
                {/* <p className="text-sm text-gray-500 dark:text-white">Category: {category}</p> */}
                <p className="text-sm text-gray-500 dark:text-white">Location: {location}</p>
                <p className="font-bold text-lg">Price: ${price.toLocaleString()}</p>
                <div className="mt-4">
                <Link to={`/propertyDetails/${_id}`} className="btn btn-outline hover:bg-orange-600 hover:text-white px-16">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatured;
