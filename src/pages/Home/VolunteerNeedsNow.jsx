import React from 'react';
import { Link } from 'react-router-dom';

const volunteerPosts = [
  {
    id: 1,
    title: "Post Title 1",
    category: "Health",
    deadline: "2024-12-25",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  },
  {
    id: 2,
    title: "Post Title 2",
    category: "Education",
    deadline: "2024-12-28",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  },
  {
    id: 3,
    title: "Post Title 3",
    category: "Environment",
    deadline: "2024-12-30",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  },
  {
    id: 4,
    title: "Post Title 4",
    category: "Community",
    deadline: "2024-12-24",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  },
  {
    id: 5,
    title: "Post Title 5",
    category: "Health",
    deadline: "2024-12-23",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  },
  {
    id: 6,
    title: "Post Title 6",
    category: "Education",
    deadline: "2024-12-26",
    thumbnail: "https://uploads.donorperfect.com/images/sites/3/volunteer-matrix-header-1.jpg",
    detailsLink: "#"
  }
];

const VolunteerNeedsNow = () => {
  const sortedPosts = volunteerPosts.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  const postsToShow = sortedPosts.slice(0, 6);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Volunteer Needs Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {postsToShow.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">Category: {post.category}</p>
              <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
              <a href={post.detailsLink} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
                View Details
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/all-volunteer-needs" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
