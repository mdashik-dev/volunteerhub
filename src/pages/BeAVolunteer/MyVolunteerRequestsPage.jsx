import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const MyVolunteerRequestsPage = () => {
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/volunteer-requests/${user.email}`);
      setVolunteerRequests(response.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch your volunteer requests.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will cancel your volunteer request.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/volunteer-requests/${id}`);
        Swal.fire(
          "Cancelled",
          "Your volunteer request has been cancelled.",
          "success"
        );
        fetchRequests();
      } catch (error) {
        Swal.fire(
          "Error",
          "Failed to cancel the request. Please try again.",
          "error"
        );
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-150px)] p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">My Volunteer Requests</h1>

      {loading ? (
        <p>Loading...</p>
      ) : volunteerRequests.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          You have no volunteer requests.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-300 dark:border-gray-700">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Post Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {volunteerRequests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <td className="p-4">{request.volunteerName}</td>
                  <td className="p-4">{request.volunteerEmail}</td>
                  <td className="p-4">{request.postTitle}</td>
                  <td className="p-4">{request.category}</td>
                  <td className="p-4">{request.status}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleCancel(request._id)}
                      className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyVolunteerRequestsPage;
