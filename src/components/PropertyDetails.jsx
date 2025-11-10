import { useLoaderData, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PropertyDetails = () => {
  const property = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");

  const {
    _id,
    name,
    image,
    description,
    price,
    location,
    category,
    created_at,
    username,
    userPhoto,
    userEmail,
  } = property;

  // ✅ Safe fallback date
  const postedDate = created_at
    ? new Date(created_at).toLocaleDateString()
    : new Date().toLocaleDateString();

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!user) return toast.error("You must be logged in to submit a review");

    const reviewData = {
      propertyId: _id,
      user: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        created_at: user?.metadata?.creationTime,
      },
      rating,
      reviewText: review,
    };

    const res = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData),
    });

    const data = await res.json();

    if (data.insertedId) {
      toast.success("Review submitted!");
      setReview("");
      setRating(3);
      navigate("/myRatings");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      
      {/* ================= Property Main Image ================= */}
      <img
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
        src={image}
        alt={name}
      />

      {/* ================= Property Details Card ================= */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-3 text-lg mt-4">
          <p>
            <span className="font-semibold text-gray-700">Price:</span> ${price}
          </p>

          <p>
            <span className="font-semibold text-gray-700">Location:</span>{" "}
            {location}
          </p>

          <p>
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {category}
          </p>

          {/* ================= Posted By & Date ================= */}
          <div className="bg-blue-50 px-4 py-3 rounded-lg mt-4 border border-blue-200">
            <p className="text-gray-800">
              <span className="font-semibold">Posted By:</span> {username}
            </p>

            {userPhoto && (
              <img
                src={userPhoto}
                alt="User"
                className="w-12 h-12 rounded-full mt-2 border"
              />
            )}
            <p className="text-gray-800 mt-1">
              <span className="font-semibold">Posted date:</span> {postedDate}
            </p>
          </div>
        </div>
      </div>

      {/* ================= Review Submit Box ================= */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          ⭐ Submit Your Review
        </h3>

        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Rating</label>
            <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} />
          </div>

          <textarea
            placeholder="Write your experience about this property..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-100"
            required
          ></textarea>

          <div className="text-center">
            <button
            type="submit"
            className="bg-blue-600 px-20 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default PropertyDetails;
