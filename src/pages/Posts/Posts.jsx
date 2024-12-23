import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { PostsSkeleton } from "../../skeletons/PostsSkeleton";
import api from "../../services/api";

const AllVolunteerPosts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState("card");

  const fetchPosts = async (searchQuery) => {
    const response = await api.get(
      `/posts${searchQuery && `?search=${searchQuery}`}`
    );
    return response?.data;
  };

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", searchQuery],
    queryFn: () => fetchPosts(searchQuery),
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const toggleLayout = () => {
    setLayout((prev) => (prev === "card" ? "table" : "card"));
  };

  return (
    <div className="container mx-auto py-8 px-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Volunteer Need Posts
      </h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Post Title"
          className="input input-bordered w-full max-w-md dark:bg-gray-700 dark:placeholder-gray-400"
        />
        <button type="submit" className="btn btn-primary ml-2">
          Search
        </button>
      </form>

      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLayout}
          className="btn btn-outline btn-secondary"
        >
          {layout === "card" ? <FaThList /> : <IoGrid />}
        </button>
      </div>

      {isLoading ? (
        <div className="w-full flex gap-3">
          <PostsSkeleton />
          <PostsSkeleton />
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">Error fetching posts.</p>
      ) : posts?.length > 0 ? (
        layout === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="card bg-base-100 dark:bg-gray-800">
                <figure>
                  <img
                    src={post.thumbnail || "https://via.placeholder.com/150"}
                    alt={post.postTitle}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">
                    {post.postTitle}
                  </h2>
                  <p className="text-sm">
                    <strong>Category:</strong> {post.category}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> {post.location}
                  </p>
                  <p className="text-sm">
                    <strong>Posted By:</strong> {post.organizerName}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/posts/${post._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse border bg-white border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Title
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Category
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Location
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Posted By
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="dark:bg-gray-700">
                    <td className="px-4 py-2 border dark:border-gray-700">
                      {post.postTitle}
                    </td>
                    <td className="px-4 py-2 border dark:border-gray-700">
                      {post.category}
                    </td>
                    <td className="px-4 py-2 border dark:border-gray-700">
                      {post.location}
                    </td>
                    <td className="px-4 py-2 border dark:border-gray-700">
                      {post.organizerName}
                    </td>
                    <td className="px-4 py-2 border dark:border-gray-700">
                      <Link
                        to={`/posts/${post._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No posts found.
        </p>
      )}
    </div>
  );
};

export default AllVolunteerPosts;
