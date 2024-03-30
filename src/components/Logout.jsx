import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
  
    // Call the logout function when the component mounts
    LogoutUser();
  }, [LogoutUser]); // Include navigate in the dependency array to ensure it's updated correctly

  return <Navigate/> // Return null since this component doesn't render anything
};

export default Logout;
