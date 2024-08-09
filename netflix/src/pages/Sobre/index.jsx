import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const Sobre = () => {
  // const { login } = useAuth();
  // login(user.token);

  return (
    <div>
      <h1>Sobre Mim</h1>
      <Link to="/sobre">Sobre</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Sobre;
