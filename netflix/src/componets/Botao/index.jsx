import styles from "./Botao.module.css";

const Botao = ({ corFundo, children }) => {
  return (
    <button className={styles.botao} style={{ background: corFundo }}>
      {children}
    </button>
  );
};

export default Botao;
