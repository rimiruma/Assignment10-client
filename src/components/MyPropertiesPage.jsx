import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";
import ErrorPage from "./ErrorPage";

const MyPropertiesPage = () => {
  const { user } = useContext(AuthContext);
  const [myProperties, setMyProperties] = useState([]);

  // ✅ Fetch user’s properties
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/properties?email=${user.email.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setMyProperties(data))
      .catch((err) => console.error(err));
  }, [user]);

  // ✅ Delete handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover this property!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/properties/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyProperties(myProperties.filter((p) => p._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your property has been removed successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch(() =>
            Swal.fire("Error!", "Something went wrong. Try again.", "error")
          );
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Properties</h2>

      {myProperties.length === 0 ? (
        <p className="text-center font-semibold">
          You haven’t added any properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProperties.map((property) => (
            <div
              key={property._id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300 rounded-xl"
            >
              <figure>
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {property.name}
                </h2>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {property.category}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> ${property.price}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {property.location}
                </p>
                <p className="text-sm opacity-70">
                  Posted By: {property.username}
                </p>

                <div className="flex gap-5 mt-4 text-xl">
                  <Link
                    to="/updataPage"
                    className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
                    title="Edit Property"
                  >
                    <FaEdit />
                  </Link>

                  <button
                    onClick={() => handleDelete(property._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer transition-transform transform hover:scale-125"
                    title="Delete Property"
                  >
                    <FaTrashAlt />
                  </button>

                  <Link
                    to={`/propertyDetails/${property._id}`}
                    className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125"
                    title="View Details"
                  >
                    <FaInfoCircle />
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
