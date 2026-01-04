import React, { useEffect, useState, useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Provider/AuthProvider";

const MyRatingsPage = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state added

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/reviews-user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        My Ratings & Reviews
      </h1>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 dark:text-gray-300">
          You have not reviewed any properties yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={review.propertyThumbnail || "https://via.placeholder.com/300"}
                alt={review.propertyName || "Property"}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  {review.propertyName}
                </h2>

                <p className="text-gray-600 text-sm dark:text-gray-300">
                  Reviewed by: {review.user?.name || user?.displayName}
                </p>

                <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />

                <p className="text-gray-700 mt-1 line-clamp-3 dark:text-gray-200">
                  {review.reviewText}
                </p>

                <p className="text-gray-400 text-xs mt-1 dark:text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatingsPage;
