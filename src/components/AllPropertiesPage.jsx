import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import ErrorPage from "./ErrorPage";

const AllPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true); // ✅ new state

  // ✅ Fetch with search + sort + debounce
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(
        `https://assignment10-server-zeta.vercel.app/properties?sort=${sortOrder}&search=${searchText}`
      )
        .then((res) => res.json())
        .then((data) => setProperties(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false)); // ✅ stop loading
    }, 400);

    return () => clearTimeout(timer);
  }, [sortOrder, searchText]);

  return (
    <div className="bg-gray-100 min-h-screen p-8 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-2">All Properties</h2>
        <p className="text-lg text-gray-600 text-center mb-8 dark:text-white">
          Explore our collection of homes and real estate listings available for sale and rent.
        </p>

        {/* 🔍 Search + Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="input input-bordered input-sm pl-10 w-60"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700 dark:text-white">SortBy:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered select-sm cursor-pointer"
            >
              <option value="">Default</option>
              <option value="asc">Low → High</option>
              <option value="desc">High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* ✅ Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
      ) : (
        <>
          {/* 🏡 Property Grid */}
          {properties.length === 0 ? (
            searchText ? (
              <ErrorPage />
            ) : (
              <p className="text-center text-gray-500">No properties found.</p>
            )
          ) : (
            <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                  <div className="p-4 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-1">{property.name}</h3>
                    <p className="text-gray-800 mt-2 dark:text-white">
                      Category: <span className="font-medium">{property.category}</span>
                    </p>
                    <p className="text-gray-800 mt-2 dark:text-white">
                      Price: <span className="font-medium">${property.price}</span>
                    </p>
                    <p className="text-gray-800 mt-2 dark:text-white">
                      Location: <span className="font-medium">{property.location}</span>
                    </p>
                    <p className="text-gray-800 mt-2 dark:text-white">
                      <span className="font-semibold">Posted By:</span> {property.username}
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
        </>
      )}
    </div>
  );
};

export default AllPropertiesPage;
