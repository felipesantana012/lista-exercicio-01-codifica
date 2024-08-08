import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NaoEncontrada from "../pages/NaoEncontrada";
import Home from "../pages/Home";
import PrivateRoutes from "./privateRoutes";
import PaginaPadrao from "../pages/PaginaPadrao";
import Sobre from "../pages/Sobre";
import { AuthProvider } from "../context/AuthContext.jsx";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            element={
              <PrivateRoutes>
                <PaginaPadrao />
              </PrivateRoutes>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
