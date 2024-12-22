import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center">
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl text-gray-700 font-semibold">Page Not Found</p>
        <p className="text-lg text-gray-500">
          We couldn't find the page you were looking for. <br /> The page might
          have been removed, or you may have typed the URL incorrectly.
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleGoHome}
          className="btn bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:bg-primary transition duration-200"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
