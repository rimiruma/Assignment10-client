import { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaUserAlt,
  FaStar,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useTheme from "../hooks/useTheme";





const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const { theme, toggleTheme } = useTheme();
  

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
              isActive
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-700 hover:text-blue-500 dark:text-white"
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
              isActive
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-700 hover:text-green-500 dark:text-white"
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
              isActive
                ? "border-b-2 border-purple-500 text-purple-600"
                : "text-gray-700 hover:text-purple-500 dark:text-white"
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
              isActive
                ? "border-b-2 border-yellow-500 text-yellow-600"
                : "text-gray-700 hover:text-yellow-500 dark:text-white"
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
              isActive
                ? "border-b-2 border-pink-500 text-pink-600"
                : "text-gray-700 hover:text-pink-500 dark:text-white"
            }`
          }
        >
          <FaStar /> My Ratings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 py-2 relative z-50">
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
       {/* Option 1: Use the ToggleButton component */}
      {/* <ToggleButton theme={theme} toggleTheme={toggleTheme} /> */}
{/* <button onClick={toggleTheme} className="btn">theme</button> */}
      {/* Option 2: Or use this DaisyUI toggle input */}
      <input
        type="checkbox"
        value="dark"
        className="toggle theme-controller mr-6 text-white"
        checked={theme === "dark"}
        onChange={(e) => toggleTheme(e.target.checked)}
      />

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
                className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 w-52 p-3 shadow-lg bg-base-100 rounded-xl border border-gray-200 dark:border-gray-700 z-[9999]"
            >
              <li>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {user?.displayName}
                </span>
              </li>
              <li>
                <span className="text-xs text-gray-500 dark:text-white">{user?.email}</span>
              </li>
              <div className="divider my-2"></div>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm text-white w-full"
                >
                  Log Out
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
