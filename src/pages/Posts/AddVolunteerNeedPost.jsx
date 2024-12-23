import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import api from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const AddVolunteerNeedPost = () => {
  const [formData, setFormData] = useState({
    thumbnail: "",
    postTitle: "",
    description: "",
    category: "",
    location: "",
    volunteersNeeded: "",
    deadline: new Date(),
  });

  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
    } = formData;

    if (
      !thumbnail ||
      !postTitle ||
      !description ||
      !category ||
      !location ||
      !volunteersNeeded
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all fields before submitting.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await api.post(
        "/add-post",
        {
          ...formData,
          organizerName: user.displayName,
          organizerEmail: user.email,
        },
        { withCredentials: true }
      );

      if (res) {
        setFormData({
          thumbnail: "",
          postTitle: "",
          description: "",
          category: "",
          location: "",
          volunteersNeeded: "",
          deadline: new Date(),
        });

        Swal.fire({
          icon: "success",
          title: "Post Added",
          text: "Your volunteer need post has been successfully added.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error while submitting the post.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Helmet>
          <title>Add Volunteer Need Post</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Add Volunteer Need Post
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Post Title
            </label>
            <input
              type="text"
              name="postTitle"
              placeholder="Enter post title"
              value={formData.postTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Thumbnail URL
            </label>
            <input
              type="url"
              name="thumbnail"
              placeholder="Enter thumbnail URL"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Number of Volunteers Needed
            </label>
            <input
              type="number"
              name="volunteersNeeded"
              placeholder="Enter number of volunteers"
              value={formData.volunteersNeeded}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Deadline
            </label>
            <DatePicker
              selected={formData.deadline}
              onChange={handleDateChange}
              className="w-full px-4 py-2 rounded-md dark:bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Organizer Name
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 border border-gray-600 focus:outline-none cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium dark:text-gray-300">
              Organizer Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 border border-gray-600 focus:outline-none cursor-not-allowed"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 text-center flex justify-center items-center bg-primary text-white font-medium rounded-md hover:bg-primary-dark"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Add Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
