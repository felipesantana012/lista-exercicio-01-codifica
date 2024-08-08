import styles from "./Botao.module.css";

const Botao = ({ corFundo, children, type = "button", disabled = false }) => {
  return (
    <button
      className={styles.botao}
      style={{ background: corFundo }}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Botao;
