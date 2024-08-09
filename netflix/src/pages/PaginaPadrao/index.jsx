import styles from "./paginaPadrao.module.css";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
  return (
    <div className={styles.paginaPadrao}>
      <header className={styles.header}>Private Header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Private Footer</footer>
    </div>
  );
};

export default PaginaPadrao;
