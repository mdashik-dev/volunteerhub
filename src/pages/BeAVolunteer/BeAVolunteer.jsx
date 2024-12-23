import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import api from "../../services/api";

const BeVolunteerModal = ({ postData, onClose }) => {
  const { user } = useContext(AuthContext);
  const [suggestion, setSuggestion] = useState("");

  const handleRequest = async () => {
    const volunteerData = {
      postId: postData?._id,
      thumbnail: postData?.thumbnail,
      postTitle: postData?.postTitle,
      description: postData?.description,
      category: postData?.category,
      location: postData?.location,
      volunteersNeeded: postData?.volunteersNeeded,
      deadline: postData?.deadline,
      organizerName: postData?.organizerName,
      organizerEmail: postData?.organizerEmail,
      volunteerName: user.displayName,
      volunteerEmail: user.email,
      suggestion,
      status: "requested",
      requestedAt: new Date().toISOString(),
    };

    try {
      const res = await api.post("/volunteer-requests", volunteerData, {
        withCredentials: true,
      });
      if (res) {
        Swal.fire("Success", "Your request has been submitted!", "success");
        onClose();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to submit the request. Try again.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg w-full max-w-lg overflow-auto max-h-screen md:max-h-[calc(100vh-20px)]">
        <h2 className="text-xl font-bold px-4 py-2">Be a Volunteer</h2>
        <img
          src={postData?.thumbnail}
          alt="Thumbnail"
          className="w-full object-cover"
        />
        <div className="space-y-2 p-6">
          <div>
            <strong>Post Title:</strong> {postData?.postTitle}
          </div>
          <div>
            <strong>Description:</strong> {postData?.description}
          </div>
          <div>
            <strong>Category:</strong> {postData?.category}
          </div>
          <div>
            <strong>Location:</strong> {postData?.location}
          </div>
          <div>
            <strong>No. of Volunteers Needed:</strong>{" "}
            {postData?.volunteersNeeded}
          </div>
          <div>
            <strong>Deadline:</strong>{" "}
            {new Date(postData?.deadline).toLocaleDateString()}
          </div>
          <div>
            <strong>Organizer Name:</strong> {postData?.organizerName}
          </div>
          <div>
            <strong>Organizer Email:</strong> {postData?.organizerEmail}
          </div>

          <div>
            <strong>Volunteer Name:</strong> {user.displayName}
          </div>
          <div>
            <strong>Volunteer Email:</strong> {user.email}
          </div>

          <div>
            <label htmlFor="suggestion" className="block font-medium">
              Suggestion:
            </label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none"
              placeholder="Write your suggestion here..."
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2 pb-5 pr-5">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleRequest}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteerModal;
