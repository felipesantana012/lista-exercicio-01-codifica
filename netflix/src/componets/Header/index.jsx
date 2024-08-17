import { useAuth } from "../../context/AuthContext";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo}></img>
      <div className={styles.nome_user_sair}>
        <h3>Bem-vindo, {user ? user.nome : "Visitante"}!</h3>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </header>
  );
};

export default Header;
