import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";

const ManageMyVolunteerPosts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const response = await api.get(`/myposts?email=${user?.email}`);
    return response?.data;
  };

  const {
    data: myPosts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myposts"],
    queryFn: fetchPosts,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`/posts/${id}`);
          Swal.fire("Success", "Post deleted successfully!", "success");
          navigate("/posts");
        } catch (error) {}
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Manage My Volunteer Need Posts
        </h2>

        {isLoading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Loading your posts...
          </p>
        ) : myPosts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            You haven't added any volunteer need posts yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    Title
                  </th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    Location
                  </th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    Volunteers Needed
                  </th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    Deadline
                  </th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {myPosts.map((post) => (
                  <tr key={post._id}>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      {post.postTitle}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      {post.location}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      {post.volunteersNeeded}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      {post.deadline}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      <div className="flex gap-2">
                        <Link
                          to={`/update-post/${post._id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyVolunteerPosts;
