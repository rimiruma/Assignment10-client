import React, { useEffect, useState, useContext, use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdatePropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [property, setProperty] = useState({
    name: "",
    price: "",
    category: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/properties/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/properties/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property)
    })
      .then(res => res.json())
      .then(() => {
        toast.success("Property updated successfully!");
        navigate("/my-properties");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-base-200 rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Update Property</h2>

      <form onSubmit={handleUpdate}>
        
        <label className="font-semibold">Property Name</label>
        <input name="name" value={property.name} onChange={handleChange}
          className="input input-bordered w-full mb-3" required />

        <label className="font-semibold">Price</label>
        <input type="number" name="price" value={property.price} onChange={handleChange}
          className="input input-bordered w-full mb-3" required />

        <label className="font-semibold">Category</label>
        <input name="category" value={property.category} onChange={handleChange}
          className="input input-bordered w-full mb-3" required />

        <label className="font-semibold">Location</label>
        <input name="location" value={property.location} onChange={handleChange}
          className="input input-bordered w-full mb-3" required />

        <label className="font-semibold">Property Image URL</label>
        <input name="image" value={property.image} onChange={handleChange}
          className="input input-bordered w-full mb-5" required />

        <button type="submit" className="btn btn-primary w-full">
          Save Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePropertyPage;
