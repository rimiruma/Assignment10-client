import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";

const MyPropertiesPage = () => {
  const { user } = useContext(AuthContext);
  const [myProperties, setMyProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:3000/properties?email=${user.email.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setMyProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  // Delete handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you can't recover this property!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/properties/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyProperties(myProperties.filter((p) => p._id !== id));
              Swal.fire("Deleted!", "Your property has been removed.", "success");
            }
          });
      }
    });
  };

  // Open modal
  const handleEdit = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  // Update property
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProperty = {
      username: selectedProperty.username,
      email: selectedProperty.email,
      name: form.name.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
    };

    fetch(`http://localhost:3000/properties/${selectedProperty._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProperty),
    })
      .then(() => {
        Swal.fire("Updated!", "Property updated successfully!", "success");
        setShowModal(false);
        setMyProperties((prev) =>
          prev.map((p) =>
            p._id === selectedProperty._id ? { ...p, ...updatedProperty } : p
          )
        );
      })
      .catch(() => Swal.fire("Error!", "Failed to update property.", "error"));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Properties</h2>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <span className="loading loading-spinner text-primary loading-lg"></span>
        </div>
      )}

      {/* No properties */}
      {!loading && myProperties.length === 0 && (
        <p className="text-center font-semibold mt-10">
          You haven’t added any properties yet.
        </p>
      )}

      {/* Properties grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProperties.map((property) => (
          <div
            key={property._id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-xl"
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
                <span className="font-semibold">Category:</span> {property.category}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${property.price}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {property.location}
              </p>
              <p className="text-sm opacity-70">Posted By: {property.username}</p>
              <div className="flex gap-5 mt-4 text-xl">
                <button
                  onClick={() => handleEdit(property)}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer transition-transform transform hover:scale-125"
                  title="Edit Property"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="text-red-600 hover:text-red-800 cursor-pointer transition-transform transform hover:scale-125"
                  title="Delete Property"
                >
                  <FaTrashAlt />
                </button>
                <button
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition-transform transform hover:scale-125"
                  title="View Details"
                >
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Stylish Update Modal */}
      {showModal && selectedProperty && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box w-full max-w-2xl">
            <h3 className="font-bold text-xl mb-4 text-center">Update Property</h3>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4">
              {/* Read-only */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>
                <input
                  type="text"
                  value={selectedProperty.username}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">User Email</span>
                </label>
                <input
                  type="email"
                  value={selectedProperty.email}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              {/* Editable fields */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Property Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedProperty.name}
                  placeholder="Property Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedProperty.description}
                  placeholder="Property Description"
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={selectedProperty.category}
                    placeholder="Category"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={selectedProperty.price}
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={selectedProperty.location}
                    placeholder="Location"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Image Link</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={selectedProperty.image}
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="modal-action flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn p-2 bg-red-600 hover:bg-red-800 text-white px-8 rounded-full transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyPropertiesPage;
