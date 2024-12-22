import React from "react";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-primary">Error</h1>
        <h2 className="text-2xl font-bold text-gray-800">
          Something Went Wrong
        </h2>
        {/* {error && <p className="text-red-500">{error.message}</p>} */}
        <p className="text-gray-600">
          Sorry, we encountered an unexpected issue. Please try again later.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => window.location.reload()}
            className="btn bg-primary text-white font-medium px-6 py-2 rounded-lg"
          >
            Reload Page
          </button>
          <a
            href="/"
            className="btn bg-blue-800 hover:bg-gray-900 text-white font-medium px-6 py-2 rounded-lg"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
