import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";
// import { auth } from "../firebase"; // Firebase auth import
// import { signOut } from "firebase/auth"; // Firebase signOut import

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null); // Replace with your actual user state management
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Sign out logic
  const handleLogout = async () => {
    // try {
    //   await signOut(auth); // Sign out the user from Firebase
    //   setUser(null); // Clear the user state
    //   navigate("/login"); // Redirect to login page
    // } catch (error) {
    //   console.error("Error signing out: ", error);
    // }
  };

  return (
    <div className="container mx-auto">
      <div className="navbar px-4">
        <div className="navbar-start z-50">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">All Volunteer Posts</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl text-primary font-extrabold"
          >
            VolunteerHub
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">All Volunteer Posts</Link>
            </li>
            <li>
              <details>
                <summary>My Profile</summary>
                <ul className="bg-base-100 rounded-t-none w-60 p-2">
                  <li>
                    <a>Add Volunteer need Post</a>
                  </li>
                  <li>
                    <a>Manage My Posts </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <button
            className="btn btn-ghost btn-circle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Theme"
          >
            {theme === "dark" ? (
              <IoIosMoon className="text-2xl" />
            ) : (
              <MdSunny className="text-2xl" />
            )}
          </button>

          {/* Conditional rendering for Login/Logout */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  title={user.displayName} // Display name on hover
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* Profile Dropdown */}
                <li>
                  <Link to="/add-post">Add Volunteer Need Post</Link>
                </li>
                <li>
                  <Link to="/manage-posts">Manage My Posts</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden lg:block rounded-lg px-4 text-white py-2 bg-primary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
