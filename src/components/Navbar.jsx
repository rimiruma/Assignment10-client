import { use, } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((e) => toast.error(e.message));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-properties">All Properties</NavLink></li>
      <li><NavLink to="/add-property">Add Properties</NavLink></li>
      <li><NavLink to="/my-properties">My Properties</NavLink></li>
      <li><NavLink to="/my-ratings">My Ratings</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
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
          <span className="text-xl font-bold">HomeNest</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/signUp" className="btn btn-primary btn-sm">SignUp</Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <img
                src={user?.photoURL} referrerPolicy="no-referrer"
                alt="User"
                className="w-10 h-10 rounded-full border"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-48 p-2 shadow bg-base-100 rounded-box"
            >
              <li><span>{user?.displayName}</span></li>
              <li><span className="text-xs text-gray-500">{user?.email}</span></li>
              <li><button onClick={handleLogout}>Log out</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
