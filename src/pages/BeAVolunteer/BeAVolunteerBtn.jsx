import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import BeVolunteerModal from "./BeAVolunteer";
import { AuthContext } from "../../contexts/AuthContext";

function BeAVolunteerBtn({ post }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const { user } = useContext(AuthContext);

  const handleShowModal = (post) => {
    const isAvailable = Number(post.volunteersNeeded) !== 0;

    if (isAvailable) {
      if (post.organizerEmail === user.email) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "You Can't be a volunteer for your post",
        });
      } else {
        setSelectedPost(post);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Not Available!",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => handleShowModal(post)}
        className={`btn ${
          Number(post.volunteersNeeded) === 0 ? "btn-warning" : "btn-primary"
        } btn-sm`}
      >
        {Number(post.volunteersNeeded) === 0
          ? "Not Available"
          : "Be a Volunteer"}
      </button>
      {selectedPost && (
        <BeVolunteerModal
          postData={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}

export default BeAVolunteerBtn;
