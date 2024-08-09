import styles from "./homeContainer.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={styles.homeContainer}>
      <h1>Home</h1>
      <Link to="/sobre">Sobre</Link>
      <Link to="/">Home</Link>
      <button onClick={handleLogout}>Sair</button>
      <h3>Bem-vindo, {user ? user.email : "Visitante"}!</h3>
    </div>
  );
};

export default Home;
