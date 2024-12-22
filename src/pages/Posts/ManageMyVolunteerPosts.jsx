import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ManageMyVolunteerPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loggedInUser = {
    id: "123",
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const fetchedPosts = [
        {
          id: "1",
          title: "Teach English to Refugees",
          location: "New York, NY",
          volunteersNeeded: 10,
          deadline: "2024-01-15",
          createdBy: "jane.doe@example.com",
        },
        {
          id: "2",
          title: "Community Park Cleanup",
          location: "Los Angeles, CA",
          volunteersNeeded: 20,
          deadline: "2024-02-20",
          createdBy: "jane.doe@example.com",
        },
      ];

      const userPosts = fetchedPosts.filter(
        (post) => post.createdBy === loggedInUser.email
      );

      setMyPosts(userPosts);
      setLoading(false);
    };

    fetchData();
  }, [loggedInUser.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setMyPosts((prev) => prev.filter((post) => post.id !== id));
        Swal.fire("Deleted!", "The post has been deleted.", "success");
      }
    });
  };

  const handleUpdate = (id) => {
    console.log("Update Post ID:", id);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Manage My Volunteer Need Posts
        </h2>

        {loading ? (
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
                  <tr key={post.id}>
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                      {post.title}
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
                        <button
                          onClick={() => handleUpdate(post.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
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
