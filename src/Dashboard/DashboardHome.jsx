import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const DashboardHome = () => {
  const [overview, setOverview] = useState(null);

  // 🔹 Fake backend data
  useEffect(() => {
    const fakeData = {
      totalProperties: 5,
      totalRatings: 12,
      averageRating: 4.5,
      statusStats: [
        { name: "Approved", value: 3 },
        { name: "Pending", value: 2 },
      ],
      recentProperties: [
        {
          _id: "1",
          title: "Luxury Apartment",
          status: "Approved",
          date: "01 Jan 2026",
        },
        {
          _id: "2",
          title: "Modern Flat",
          status: "Pending",
          date: "30 Dec 2025",
        },
      ],
    };

    // simulate backend delay
    setTimeout(() => {
      setOverview(fakeData);
    }, 500);
  }, []);

  if (!overview) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  const {
    totalProperties,
    totalRatings,
    averageRating,
    statusStats,
    recentProperties,
  } = overview;

  return (
    <motion.div
      className="p-4 sm:p-6 bg-base-100 text-base-content min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Overview
      </h2>

      {/* 🔹 Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className="card bg-base-200 p-4 shadow">
          <h3 className="font-semibold">My Properties</h3>
          <p className="text-3xl font-bold mt-2">
            {totalProperties}
          </p>
        </div>

        <div className="card bg-base-200 p-4 shadow">
          <h3 className="font-semibold">My Ratings</h3>
          <p className="text-3xl font-bold mt-2">
            {totalRatings}
          </p>
        </div>

        <div className="card bg-base-200 p-4 shadow">
          <h3 className="font-semibold">Average Rating</h3>
          <p className="text-3xl font-bold mt-2">
            {averageRating}
          </p>
        </div>
      </div>

      {/* 🔹 Dynamic Pie Chart */}
      <div className="bg-base-200 p-6 rounded shadow mb-10">
        <h3 className="text-xl font-semibold mb-4">
          Property Status Distribution
        </h3>

        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={statusStats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {statusStats.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Dynamic Table */}
      <div className="bg-base-200 p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">
          Recent Properties
        </h3>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentProperties.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td
                    className={
                      item.status === "Approved"
                        ? "text-success"
                        : "text-warning"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;
