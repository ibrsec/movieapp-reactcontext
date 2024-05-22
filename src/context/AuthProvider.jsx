import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("movie-app-user")) || false
  );
  console.log("curentuser context initial = ", currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    userOserver();
  }, []);

  const createUser = async ({ email, password, username, imageUrl }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("register response = ", response);
      // const user = userCredential.user;
      toastSuccessNotify("Registered Successfully!");
      setCurrentUser({
        email: response?.user?.email,
        displayName: response?.user?.displayName,
        photoURL: response?.user?.photoURL,
        accessToken: response?.user?.accessToken,
      });
      localStorage.setItem(
        "movie-app-user",
        JSON.stringify({
          email: response?.user?.email,
          displayName: response?.user?.displayName,
          photoURL: response?.user?.photoURL,
          accessToken: response?.user?.accessToken,
        })
      );

      const updateProfileResponse = await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: imageUrl,
      });
      console.log("Update Profile Response = ", updateProfileResponse);

      navigate("/");
    } catch (error) {
      toastErrorNotify("Regsiter is Failed");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  const login = async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("login response = ", response);
      // const user = userCredential.user;
      toastSuccessNotify("Logged In Successfully!");

      navigate(-1);
    } catch (error) {
      toastErrorNotify("Login is Failed");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const logOut = async () => {
    try {
      const response = await signOut(auth);
      toastSuccessNotify("Logged out successfully");
      console.log("logout response = ", response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const userOserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("logged in - ", user);
        const { email, displayName, photoURL, accessToken } = user;
        // setCurrentUser({
        //   email: user?.email,
        //   displayName: user?.displayName,
        //   photoURL: user?.photoURL,
        //   accessToken: user?.accessToken,
        // });
        setCurrentUser({ email, displayName, photoURL, accessToken });
        localStorage.setItem(
          "movie-app-user",
          JSON.stringify({ email, displayName, photoURL, accessToken })
        );
        // ...
      } else {
        // User is signed out
        console.log("logged out");

        setCurrentUser(false);
        localStorage.setItem("movie-app-user", false);
        // ...
      }
    });
  };

  const googleProvider = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        toastSuccessNotify("Successfully logged in!");
      })
      .catch((error) => {
        toastErrorNotify("Login is Failed!");
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify("Please check your mailbox!");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
        // ..
      });
  };

  const values = {
    currentUser,
    createUser,
    login,
    logOut,
    googleProvider,
    forgotPassword
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
