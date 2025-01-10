import React from "react";

const UpcomingVolunteerEventsList = () => {
  const events = [
    {
      id: 1,
      title: "Community Garden Planting",
      location: "Central Park",
      date: "Mar 12, 2025",
      description:
        "Join us for a community garden planting event to beautify our surroundings!",
      bannerImage:
        "https://images.stockcake.com/public/8/3/8/838acd3a-36ae-4786-91c1-823b361cf0e0_large/community-garden-planting-stockcake.jpg",
    },
    {
      id: 2,
      title: "Beach Cleanup",
      location: "Santa Monica Beach",
      date: "Apr 7, 2025",
      description:
        "Help us clean up the beach and make a positive impact on the environment.",
      bannerImage:
        "https://www.parksconservancy.org/sites/default/files/styles/hero/public/hero/20130713-A_OCBE_130713_MDu_77_hero.jpg?itok=8bmDDcA4&timestamp=1542497091",
    },
    {
      id: 3,
      title: "Homeless Shelter Volunteering",
      location: "Downtown Shelter",
      date: "Feb 18, 2025",
      description:
        "Assist at the local shelter to provide support for those in need.",
      bannerImage: "https://www.rosterfy.com/hubfs/Homeless%20Shelter.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          Upcoming Volunteer Events
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Be a part of these upcoming events and make a difference.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:text-white"
            >
              <img
                src={event.bannerImage}
                alt={event.title}
                className="w-full h-48 lg:h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {event.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {event.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  {event.description}
                </p>
                <button className="mt-6 btn btn-primary">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingVolunteerEventsList;
