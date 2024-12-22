import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const AllVolunteerPosts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState("card"); 

  const posts = [
    {
      id: "1",
      title: "Teach English to Refugees",
      category: "Education",
      location: "New York, NY",
      postedBy: "Jane Doe",
    },
    {
      id: "2",
      title: "Community Park Cleanup",
      category: "Environment",
      location: "Los Angeles, CA",
      postedBy: "John Smith",
    },
    {
      id: "3",
      title: "Food Drive Volunteer",
      category: "Charity",
      location: "Chicago, IL",
      postedBy: "Alice Johnson",
    },
  ];

  const fetchPosts = async (query = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/posts${query ? `?search=${query}` : ""}`
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(searchQuery);
  };

  const toggleLayout = () => {
    setLayout((prev) => (prev === "card" ? "table" : "card"));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Volunteer Need Posts
      </h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Post Title"
          className="input input-bordered w-full max-w-md"
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

      {loading ? (
        <p className="text-center">Loading posts...</p>
      ) : posts?.length > 0 ? (
        layout === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((post) => (
              <div key={post.id} className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">{post.title}</h2>
                  <p className="text-sm">
                    <strong>Category:</strong> {post.category}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> {post.location}
                  </p>
                  <p className="text-sm">
                    <strong>Posted By:</strong> {post.postedBy}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/posts/${post.id}`}
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
            <table className="table w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Location</th>
                  <th className="px-4 py-2 border">Posted By</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-4 py-2 border">{post.title}</td>
                    <td className="px-4 py-2 border">{post.category}</td>
                    <td className="px-4 py-2 border">{post.location}</td>
                    <td className="px-4 py-2 border">{post.postedBy}</td>
                    <td className="px-4 py-2 border">
                      <Link
                        to={`/posts/${post.id}`}
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
        <p className="text-center text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default AllVolunteerPosts;
