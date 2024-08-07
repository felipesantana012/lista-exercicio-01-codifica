import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NaoEncontrada from "./pages/NaoEncontrada";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
