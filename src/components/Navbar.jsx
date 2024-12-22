import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-white/45 dark:bg-gray-800/45 sticky top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="navbar px-4">
          <div className="navbar-start z-50">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <Link
                    to="/"
                    className={isActive("/") ? "bg-primary text-white" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts"
                    className={
                      isActive("/posts") ? "bg-primary text-white" : ""
                    }
                  >
                    All Volunteer Posts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className={
                      isActive("/login") ? "bg-primary text-white" : ""
                    }
                  >
                    Login
                  </Link>
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
                <Link
                  to="/"
                  className={isActive("/") ? "bg-primary text-white" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className={isActive("/posts") ? "bg-primary text-white" : ""}
                >
                  All Volunteer Posts
                </Link>
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

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full"
                    title={user.displayName}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-5"
                >
                  <li>
                    <Link
                      to="/add-post"
                      className={
                        isActive("/add-post") ? "bg-primary text-white" : ""
                      }
                    >
                      Add Volunteer Need Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-post"
                      className={
                        isActive("/manage-post") ? "bg-primary text-white" : ""
                      }
                    >
                      Manage My Posts
                    </Link>
                  </li>
                  <li>
                    <button onClick={logOut} className="px-4 py-2">
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
    </div>
  );
};

export default Navbar;
