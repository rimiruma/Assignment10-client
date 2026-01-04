import React, { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    photoURL: "",
  });
  const [toast, setToast] = useState(false);

  // ইউজারের ডাটা লোড করা
  useEffect(() => {
    if (!userEmail) return;

    axios
      .get(`http://localhost:3000/users?email=${userEmail.toLowerCase()}`)
      .then((res) => {
        if (res.data) {
          setProfile(res.data);
          setFormData({
            name: res.data.name || "",
            photoURL: res.data.photoURL || "",
          });
        }
      })
      .catch((err) => console.error(err));
  }, [userEmail]);

  if (!profile) return <p className="p-6">Loading profile...</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/users/${profile._id}`,
        formData
      );
      setProfile(res.data);
      setEditing(false);
      setToast(true); // টোস্ট দেখানো
      setTimeout(() => setToast(false), 3000); // 3 সেকেন্ডে লুকানো
    } catch (err) {
      console.error(err);
      alert("Error updating profile!"); // সহজ এরর
    }
  };

  return (
    <motion.div className="p-6 max-w-md mx-auto relative">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="mb-3">
        <label className="block font-semibold">Name:</label>
        <input
          className="border p-2 w-full rounded"
          disabled={!editing}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="block font-semibold">Email:</label>
        <input
          className="border p-2 w-full rounded bg-gray-100"
          disabled
          value={profile.email}
        />
      </div>

      <div className="mb-3">
        <label className="block font-semibold">Photo URL:</label>
        <input
          className="border p-2 w-full rounded"
          disabled={!editing}
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        {formData.photoURL && (
          <img
            src={formData.photoURL}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
        )}
      </div>

      <div className="mt-4">
        {!editing && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}

        {editing && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>

      {/* টোস্ট মেসেজ */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
          >
            Profile Updated Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
