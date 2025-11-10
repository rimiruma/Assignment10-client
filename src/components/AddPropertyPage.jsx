
import Swal from "sweetalert2";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddPropertyPage = () => {

  const { user } = use(AuthContext);

  const handleAddProperty = (e) => {
    e.preventDefault();

    const form = e.target;

    const propertyData = {
      name: form.name.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      image: form.image.value,
      email: user?.email,
      username: user?.displayName
    };

    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(propertyData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Property Added Successfully",
            icon: "success"
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-xl my-10">
      <h2 className="text-4xl font-bold text-center mb-6">Add Property</h2>

      <form onSubmit={handleAddProperty} className="grid gap-4">
        
        <input type="text" name="name" placeholder="Property Name" className="input input-bordered" required />
        
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered" required></textarea>

        <select name="category" className="select select-bordered" required>
          <option disabled selected>Select Category</option>
          <option>Rent</option>
          <option>Sale</option>
          <option>Commercial</option>
          <option>Land</option>
        </select>

        <input type="number" name="price" placeholder="Price" className="input input-bordered" required />

        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />

        <input type="url" name="image" placeholder="Image Link" className="input input-bordered" required />

        <input type="email" value={user?.email} readOnly className="input input-bordered bg-gray-100" />

        <input type="text" value={user?.displayName} readOnly className="input input-bordered bg-gray-100" />

        <button className="btn btn-primary mt-4">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
