import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { logoutUser } = useAuth();

  useEffect(() => {
    // Call the logout function when the component mounts
    logoutUser();
  }, [logoutUser]); // Include navigate in the dependency array to ensure it's updated correctly

  return <Navigate to="/login" />; // Return null since this component doesn't render anything
};

export default Logout;
