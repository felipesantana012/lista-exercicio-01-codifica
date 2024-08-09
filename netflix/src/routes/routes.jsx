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
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route
            element={
              <PrivateRoutes>
                <PaginaPadrao />
              </PrivateRoutes>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
