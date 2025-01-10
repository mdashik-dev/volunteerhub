import React from "react";

const VolunteerImpactStats = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 py-16 text-white dark:bg-gradient-to-r dark:from-indigo-900 dark:via-purple-800 dark:to-pink-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Volunteer Impact</h2>
        <p className="text-lg mb-10 text-gray-200 dark:text-gray-400">Together, we've made a significant difference. Check out our stats!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">
              <i className="fas fa-users"></i>
            </div>
            <div className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-100">12,345</div>
            <div className="text-gray-600 dark:text-gray-400">Total Volunteers</div>
          </div>
          <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="text-4xl mb-4 text-green-600 dark:text-green-400">
              <i className="fas fa-clock"></i>
            </div>
            <div className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-100">54,678</div>
            <div className="text-gray-600 dark:text-gray-400">Total Hours Volunteered</div>
          </div>
          <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="text-4xl mb-4 text-yellow-600 dark:text-yellow-400">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-100">345</div>
            <div className="text-gray-600 dark:text-gray-400">Successful Events</div>
          </div>
          <div className="stat-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white">
            <div className="text-4xl mb-4 text-red-600 dark:text-red-400">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-100">$124,567</div>
            <div className="text-gray-600 dark:text-gray-400">Donations Raised</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerImpactStats;
