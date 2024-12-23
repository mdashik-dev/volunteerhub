import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import { PostsSkeleton } from "../../skeletons/PostsSkeleton";
import moment from "moment";

const VolunteerNeedsNow = () => {
  const fetchPosts = async () => {
    const response = await api.get(`/posts?sort=true`);
    return response?.data;
  };

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="w-full flex gap-3">
        <PostsSkeleton />
        <PostsSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 dark:text-red-400">
        Failed to load posts. Please try again later.
      </p>
    );
  }

  const sortedPosts = data?.posts?.sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );
  const postsToShow = sortedPosts.slice(0, 6);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
          Volunteer Needs Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">
                Category: {post.category}
              </p>
              <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">
                Deadline: {moment(post.deadline).format("DD MMMM YYYY")}
              </p>
              <Link
                to={`/posts/${post._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/posts"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
