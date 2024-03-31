import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
// Import statements...

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const fetchUserData = async (serverToken) => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${serverToken}` },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    } else {
      setUser(""); // Reset user data when token is removed
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, storeTokenInLS, logoutUser, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth requires a context to be provided");
  }
  return authContextValue;
};
