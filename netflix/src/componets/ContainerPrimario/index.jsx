import styles from "./ContainerPrimario.module.css";
import logo from "../../assets/logo.png";
import Login from "../Login";
const ContainerPrimario = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}></img>
      <Login />
    </div>
  );
};

export default ContainerPrimario;
