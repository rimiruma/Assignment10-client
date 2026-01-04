import React from "react";
import { FaPlusCircle, FaStar, FaUserAlt, FaUsers, FaHome, FaTasks, FaSignOutAlt } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin, adminLoading] = useAdmin();
  const navigate = useNavigate();

  if (adminLoading) return <p className="text-center mt-20">Loading dashboard...</p>;

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // যদি token থাকে
    navigate("/"); // হোমপেজে redirect
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <nav className="navbar bg-base-300 dark:bg-gray-900">
          <label htmlFor="my-drawer-4" className="btn btn-ghost btn-square">☰</label>
          <h1 className="text-2xl text-orange-500 px-4">Property Dashboard</h1>
        </nav>
        <div className="p-4"><Outlet /></div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="menu p-4 w-64 bg-base-200 dark:bg-gray-800 min-h-full flex flex-col justify-between">
          <div>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}>
                <FaHome /> Homepage
              </NavLink>
            </li>

            {!isAdmin && (
              <>
                <li className="menu-title mt-4">User Dashboard</li>
                <li><NavLink to="/dashboard/add-property" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaPlusCircle /> Add Property</NavLink></li>
                <li><NavLink to="/dashboard/my-properties" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaUserAlt /> My Properties</NavLink></li>
                <li><NavLink to="/dashboard/my-ratings" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaStar /> My Ratings</NavLink></li>
                <li><NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}>👤 Profile</NavLink></li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="menu-title mt-4">Admin Dashboard</li>
                <li><NavLink to="/dashboard/admin-home" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/manage-users" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaUsers /> Manage Users</NavLink></li>
                <li><NavLink to="/dashboard/manage-properties" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaTasks /> Manage Properties</NavLink></li>
              </>
            )}
          </div>

          {/* লগআউট বাটন */}
          <li className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2
                         rounded-lg font-semibold
                         bg-gradient-to-r from-red-400 to-red-600
                         dark:from-red-600 dark:to-red-800
                         text-white
                         shadow-lg
                         transform transition-transform duration-200 hover:scale-105
                         hover:from-red-500 hover:to-red-700
                         dark:hover:from-red-700 dark:hover:to-red-900"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
