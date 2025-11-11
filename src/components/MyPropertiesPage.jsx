import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const MyPropertiesPage = () => {
    const { user } = useContext(AuthContext);
    const [myProperties, setMyProperties] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/properties?email=${user.email.toLowerCase()}`)
            .then(res => res.json())
            .then(data => setMyProperties(data))
            .catch(err => console.error(err));
    }, [user]);

    const handleDelete = (id) => {
        const confirmDelete = confirm("Are you sure you want to delete?");
        if (!confirmDelete) return;

        fetch(`http://localhost:5000/properties/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Property deleted successfully!");
                    setMyProperties(myProperties.filter(prop => prop._id !== id));
                }
            });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold text-center mb-6">My Properties</h2>

            {myProperties.length === 0 ? (
                <p className="text-center font-semibold">No properties added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myProperties.map(property => (
                        <div key={property._id} className="card bg-base-100 shadow-md hover:shadow-lg">
                            <figure>
                                <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{property.name}</h2>
                                <p><span className="font-semibold">Category:</span> {property.category}</p>
                                <p><span className="font-semibold">Price:</span> ${property.price}</p>
                                <p><span className="font-semibold">Location:</span> {property.location}</p>
                                <p className="text-sm opacity-70">
                                    Posted: {property.postedAt ? new Date(property.postedAt).toLocaleDateString() : "N/A"}
                                </p>

                                <div className="card-actions justify-between mt-3">
                                    <Link to={`/update/${property._id}`}>
                                        <button className="btn btn-warning btn-sm">Update</button>
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(property._id)}
                                        className="btn btn-error btn-sm"
                                    >
                                        Delete
                                    </button>

                                    <Link to={`/properties/${property._id}`}>
                                        <button className="btn btn-neutral btn-sm">View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyPropertiesPage;
