import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-sm bg-white dark:dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Sign in to your account
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-primary dark:bg-gray-800 border-gray-600 rounded focus:ring-primary"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-medium rounded-md"
          >
            Sign in
          </button>
        </form>
        <div className="divider divider-primary">
          Login with social account
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-full hover:bg-primary hover:text-white duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account? {" "}
          <a
            rel="noopener noreferrer"
            href="/register"
            className="underline text-gray-800 dark:text-white"
          >
             Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
