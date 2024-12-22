import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
          How Volunteering Works
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Step 1: Sign Up
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Create an account to get started. Once you're signed up, you can
                explore volunteer opportunities near you.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Step 2: Choose a Project
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Browse through available volunteer opportunities, and choose one
                that suits your interests and skills.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Step 3: Make an Impact
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
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
