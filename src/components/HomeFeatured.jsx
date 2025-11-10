const HomeFeatured = ({ property }) => {
    const { image, name, category, description, location, price } = property;

    return (
        <div className="card bg-white w-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <figure className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </figure>

            <div className="card-body p-5">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p className="text-gray-600 line-clamp-3">{description}</p>
                <p className="text-sm text-gray-500">Category: {category}</p>
                <p className="text-sm text-gray-500">Location: {location}</p>
                <p className="font-bold text-lg">Price: ${price.toLocaleString()}</p>
                <div className="mt-4">
                    <button className="btn btn-primary px-14 py-2">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatured;
