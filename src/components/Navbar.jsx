import { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaUserAlt,
  FaStar,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((e) => toast.error(e.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium transition ${
              isActive ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProperties"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium transition ${
              isActive ? "border-b-2 border-green-500 text-green-600" : "text-gray-700 hover:text-green-500"
            }`
          }
        >
          <FaBuilding /> All Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProperty"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium transition ${
              isActive ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-700 hover:text-purple-500"
            }`
          }
        >
          <FaPlusCircle /> Add Property
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProperties"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium transition ${
              isActive ? "border-b-2 border-yellow-500 text-yellow-600" : "text-gray-700 hover:text-yellow-500"
            }`
          }
        >
          <FaUserAlt /> My Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myRatings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium transition ${
              isActive ? "border-b-2 border-pink-500 text-pink-600" : "text-gray-700 hover:text-pink-500"
            }`
          }
        >
          <FaStar /> My Ratings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 py-2">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10" />
          <span className="text-xl font-bold text-primary">HomeNest</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="btn btn-outline btn-sm mx-2"
        title="Toggle Theme"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      {/* User / Auth Buttons */}
      <div className="navbar-end gap-2">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/signUp" className="btn btn-primary btn-sm">
              SignUp
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <img
                src={user?.photoURL}
                referrerPolicy="no-referrer"
                alt="User"
                className="w-10 h-10 rounded-full border"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-48 p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <span className="font-semibold">{user?.displayName}</span>
              </li>
              <li>
                <span className="text-xs text-gray-500">{user?.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
