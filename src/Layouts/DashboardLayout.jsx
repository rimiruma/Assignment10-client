import React from "react";
import { FaPlusCircle, FaStar, FaUserAlt, FaUsers, FaHome, FaTasks } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin, adminLoading] = useAdmin();

  if (adminLoading) return <p className="text-center mt-20">Loading dashboard...</p>;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <nav className="navbar bg-base-300">
          <label htmlFor="my-drawer-4" className="btn btn-ghost btn-square">☰</label>
          <h1 className="text-2xl text-orange-500 px-4">Property Dashboard</h1>
        </nav>
        <div className="p-4"><Outlet /></div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="menu p-4 w-64 bg-base-200 min-h-full">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}>
              <FaHome /> Homepage
            </NavLink>
          </li>

          {!isAdmin && (
            <>
              <li className="menu-title">User Dashboard</li>
              <li><NavLink to="/dashboard/add-property" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaPlusCircle /> Add Property</NavLink></li>
              <li><NavLink to="/dashboard/my-properties" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaUserAlt /> My Properties</NavLink></li>
              <li><NavLink to="/dashboard/my-ratings" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaStar /> My Ratings</NavLink></li>
              <li><NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}>👤 Profile</NavLink></li>
            </>
          )}

          {isAdmin && (
            <>
              <li className="menu-title">Admin Dashboard</li>
              <li><NavLink to="/dashboard/admin-home" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaHome /> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/manage-users" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaUsers /> Manage Users</NavLink></li>
              <li><NavLink to="/dashboard/manage-properties" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : ""}><FaTasks /> Manage Properties</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
