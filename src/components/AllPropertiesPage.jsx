import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllPropertiesPage = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/properties")
            .then((res) => res.json())
            .then((data) => setProperties(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h2 className="text-3xl font-bold text-center mb-2">
                All Properties
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
                Explore our collection of homes and real estate listings available for sale and rent.
            </p>

            {properties.length === 0 ? (
                <p className="text-center text-gray-500">
                    No properties found.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <div
                            key={property._id}
                            className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
                        >
                            <figure>
                                <img
                                    src={property.image}
                                    alt={property.name}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1">{property.name}</h3>

                                <p className="text-gray-800 mt-2">
                                    Category:{" "}
                                    <span className="font-medium">{property.category}</span>
                                </p>

                                <p className="text-gray-800 mt-2">
                                    Price:{" "}
                                    <span className="font-medium">${property.price}</span>
                                </p>

                                <p className="text-gray-800 mt-2">
                                    Location:{" "}
                                    <span className="font-medium">{property.location}</span>
                                </p>

                                {/* ✅ Use property.username */}
                                <p className="text-gray-800 mt-2">
                                    <span className="font-semibold">Posted By:</span>{" "}
                                    {property.username}
                                </p>

                                <Link
                                    to={`/propertyDetails/${property._id}`}
                                    className="btn btn-sm p-5 bg-blue-600 text-white mt-3 w-full hover:bg-blue-700"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllPropertiesPage;
