import React from "react";
import { FaUserPlus, FaProjectDiagram, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-base-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          How Volunteering Works
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-blue-500 dark:text-blue-400 text-4xl mb-4">
                <FaUserPlus />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Step 1: Sign Up
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create an account to get started. Once you're signed up, you can
                explore volunteer opportunities near you.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-green-500 dark:text-green-400 text-4xl mb-4">
                <FaProjectDiagram />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Step 2: Choose a Project
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse through available volunteer opportunities, and choose one
                that suits your interests and skills.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-yellow-500 dark:text-yellow-400 text-4xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Step 3: Make an Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join the project, start contributing, and make a positive impact
                in your community. It’s that simple!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
