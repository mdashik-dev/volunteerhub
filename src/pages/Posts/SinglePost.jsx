import React from "react";
import api from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { PostsSkeleton } from "../../skeletons/PostsSkeleton";

const SinglePost = () => {

  const { id } = useParams();


  const fetchPost = async () => {
    const response = await api.get(`/myposts?id=${id}`);
    return response?.data[0];
  };

  const {
    data: current,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currentpost", id],
    queryFn: fetchPost,
  });

  if (isLoading) {
    return <PostsSkeleton/>
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 dark:text-red-400">
        Error loading post.
      </p>
    );
  }

  if (!current) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No post found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <figure className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={current?.thumbnail}
          alt={current?.postTitle}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {current?.postTitle}
        </h1>

        <div className="mb-4 text-gray-700 dark:text-gray-300">
          <p className="mb-2">
            <strong>Category:</strong> {current?.category}
          </p>
          <p className="mb-2">
            <strong>Location:</strong> {current?.location}
          </p>
          <p className="mb-2">
            <strong>Posted By:</strong> {current?.organizerName}
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-400 mb-6">
          {current?.description ||
            "No additional description available for this post."}
        </p>

        <button
          className="btn btn-primary w-full sm:w-auto"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
