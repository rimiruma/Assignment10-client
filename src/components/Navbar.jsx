import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'

const Navbar = () => {

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
            
            {/* Navbar Left Section */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 shadow rounded-box">
                        {links}
                    </ul>
                </div>

                {/* Logo + Brand */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-10" />
                    <a className="text-xl font-bold cursor-pointer">
                        HomeNest
                    </a>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1 font-medium">
                    {links}
                </ul>
            </div>

            {/* Buttons Right */}
            <div className="navbar-end gap-2">
                <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                <Link to="/signUp" className="btn btn-primary btn-sm">SignUp</Link>
            </div>

        </div>
    );
};

export default Navbar;
