import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  useEffect(() => {
    logoutUser();
    navigate('/Home')
  }, [logoutUser, navigate]);

  return null; // Return null since this component doesn't render anything
};

export default Logout;
