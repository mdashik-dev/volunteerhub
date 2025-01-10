import React from "react";

const PopularVolunteerOpportunities = () => {
  // Fake Data for Popular Opportunities
  const opportunities = [
    {
      title: "Community Clean-Up",
      location: "Central Park",
      date: "Feb 20, 2025",
      image: "https://i.natgeofe.com/k/3519980b-ba58-456d-b691-2ed516c223e0/clean-it-up-textimage.jpg",
    },
    {
      title: "Food Drive for Homeless",
      location: "Downtown",
      date: "Mar 10, 2025",
      image: "https://i0.wp.com/saidhamfoodbank.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-02.33.16.jpg?fit=1600%2C1200&ssl=1",
    },
    {
      title: "Animal Shelter Assistance",
      location: "Animal Rescue Center",
      date: "Apr 5, 2025",
      image: "https://blessingforpeople.org/wp-content/uploads/2021/11/photo_2021-08-26_15-17-06-e1636118750442.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Popular Volunteer Opportunities
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Discover the most popular volunteer events that you can participate in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="card w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img src={opp.image} alt={opp.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="card-body p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{opp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{opp.location}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{opp.date}</p>
                <button className="w-full btn btn-primary py-2 text-sm lg:text-base">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularVolunteerOpportunities;
