import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); // Update the state after setting token in localStorage
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!Token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser(null)
  };
  //JWT AUTHENTICATION -- to get currently logged in user data
  const useAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${Token}` },
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
