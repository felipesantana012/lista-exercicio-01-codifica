import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Função que verifica se o usuário está autenticado
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
