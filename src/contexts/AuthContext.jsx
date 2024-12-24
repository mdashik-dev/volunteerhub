import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { app } from "../services/firebase.config";
import api from "../services/api";
import { FaSpinner } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        api
          .post(
            "/jwt",
            { email: currentUser?.email },
            {
              withCredentials: true,
            }
          )
          .then((res) => {});
      } else {
        api
          .post(
            "/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {});
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const registerUserWithEmailAndPass = async (email, pass, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire(
              "Success",
              "Congrats! Your account has been registered.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "An error occurred while updating your profile.",
              "warning"
            );
            console.error(error);
          });
      })
      .catch((error) => {
        Swal.fire(
          "Error",
          error.message || "Registration failed. Please try again.",
          "error"
        );
        console.error(error);
      });
  };

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        Swal.fire(
          "Success",
          "Your profile has been updated successfully!",
          "success"
        );
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to update profile.", "error");
        console.error(error);
      });
  };

  const sendPassResetMail = (email) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          "Success",
          "Password reset email sent successfully.",
          "success"
        );
      })
      .catch((error) => {
        Swal.fire(
          "Error",
          error.message || "Failed to send reset email.",
          "error"
        );
        console.error(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire("Success", "Logged out successfully.", "success");
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to log out.", "error");
        console.error(error);
      });
  };

  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    registerUserWithEmailAndPass,
    loginWithEmailAndPass,
    sendPassResetMail,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Bounce>
            <FaSpinner className="text-6xl text-primary animate-spin" />
          </Bounce>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Loading, please wait...
          </p>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
