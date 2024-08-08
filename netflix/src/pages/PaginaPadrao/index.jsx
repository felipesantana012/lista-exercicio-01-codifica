import React from "react";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
  return (
    <div>
      <header>Private Header</header>
      <main>
        <Outlet /> {/* Renderiza a rota filha */}
      </main>
      <footer>Private Footer</footer>
    </div>
  );
};

export default PaginaPadrao;
