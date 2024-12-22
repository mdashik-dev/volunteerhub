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
import { app } from "../services/src/services/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-t-primary border-gray-300 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
