import React, { createContext, useState, useEffect, useContext } from "react";
import Loading from "../componets/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // setTimeout(() => {
      fetchUserData(token);
      // }, 2000);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(
        "http://localhost:3000/users?token=" + token
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar dados do usuário");
      }
      const data = await response.json();

      const user = await data.find((user) => user.token === token);
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    } catch (error) {
      console.error(error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = (user) => {
    localStorage.setItem("authToken", user.token);
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
