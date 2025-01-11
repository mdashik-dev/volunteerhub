import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12 min-h-[80vh] flex justify-center items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About{" "}
            <span className="text-blue-500 dark:text-blue-400">
              Volunteer Hub
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
            At Volunteer Hub, we connect passionate individuals with meaningful
            opportunities to make a difference. Together, we create a world of
            impact, one act of kindness at a time.
          </p>
          <div className="flex justify-center gap-6">
            <div className="w-1/3 md:w-1/4 lg:w-1/5">
              <img
                src="https://www.hrresolutions.com/wp-content/uploads/2017/06/volunteer.jpg"
                alt="Community Work"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5">
              <img
                src="https://www.infinityconcepts.com/wp-content/uploads/2023/02/The-Value-of-Teamwork.jpg"
                alt="Teamwork"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5">
              <img
                src="https://regenbrampton.com/wp-content/uploads/2023/08/How-Does-Volunteering-Help-the-Community_-Hero.jpg"
                alt="Volunteering"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/join-us"
              className="btn btn-primary btn-lg px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
