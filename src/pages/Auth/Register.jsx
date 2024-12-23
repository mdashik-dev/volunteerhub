import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { registerUserWithEmailAndPass } = useContext(AuthContext);
  const navigate = useNavigate();

  // Password validation regex
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name || !photoURL) {
      setError("Please fill in all fields.");
      return;
    }

    if (!passwordValidation.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setError("");
    setLoading(true);
    try {
      await registerUserWithEmailAndPass(email, password, name, photoURL);
      navigate("/login");
    } catch (error) {
      Swal.fire(
        "Error",
        error.message || "Registration failed. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create an account
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="url"
              id="photoURL"
              placeholder="Profile Picture URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-medium rounded-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        <SocialLogin />

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="underline text-gray-800 dark:text-white">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
