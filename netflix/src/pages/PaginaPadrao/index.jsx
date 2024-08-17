import styles from "./paginaPadrao.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../componets/Header";

const PaginaPadrao = () => {
  return (
    <div className={styles.paginaPadrao}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Private Footer</footer>
    </div>
  );
};

export default PaginaPadrao;
