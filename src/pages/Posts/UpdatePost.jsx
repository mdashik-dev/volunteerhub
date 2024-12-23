import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";

const UpdatePost = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    thumbnail: "",
    postTitle: "",
    description: "",
    category: "",
    location: "",
    volunteersNeeded: "",
    deadline: null,
    organizerName: user?.displayName,
    organizerEmail: user?.email,
  });

  const fetchPost = async () => {
    const response = await api.get(`/myposts?id=${id}`);
    return response?.data[0];
  };

  const {
    data: myPost,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["mypost", id],
    queryFn: fetchPost,
  });

  useEffect(() => {
    if (myPost) {
      setFormData((prev) => ({
        ...prev,
        ...myPost,
        deadline: myPost.deadline ? new Date(myPost.deadline) : null,
      }));
    }
  }, [myPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    delete formData._id;
    try {
      await api.put(`/posts/${id}`, formData);
      Swal.fire("Success", "Post updated successfully!", "success");
      navigate("/posts");
    } catch (error) {
      Swal.fire("Error", "Failed to update post.", "error");
    }
  };

  if (isError) {
    return (
      <div className="container mx-auto p-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Error Loading Post
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Update Volunteer Post</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            type="text"
            name="postTitle"
            value={formData.postTitle}
            onChange={handleChange}
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            disabled={isLoading}
            className="select select-bordered w-full"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <DatePicker
            selected={formData.deadline}
            onChange={handleDateChange}
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={isLoading}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            value={formData.volunteersNeeded}
            onChange={handleChange}
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Organizer Name
          </label>
          <input
            type="text"
            value={formData.organizerName}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Organizer Email
          </label>
          <input
            type="email"
            value={formData.organizerEmail}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary col-span-2"
        >
          {isLoading ? "Loading..." : "Update Post"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
