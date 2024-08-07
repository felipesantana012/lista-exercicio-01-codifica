import Botao from "../Botao";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.containerLogin}>
      <h1>Entrar</h1>
      <div className={styles.inputs}>
        <div className={styles.inputs_item}>
          <input type="text" id="nome" />
          <label htmlFor="nome">Email ou numero de celular</label>
        </div>
        <div className={styles.inputs_item}>
          <input type="password" id="senha" />
          <label htmlFor="senha">Senha</label>
        </div>
        <Botao corFundo={"#e50914"}>Entrar</Botao>
      </div>

      <div className={styles.outrasOpcoes}>
        <p>OU</p>
        <Botao corFundo={"#393938"}>Usar um codigo de acesso</Botao>
        <div className={styles.link}>
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>

      <div className={styles.lembre}>
        <label htmlFor="lembreDeMim">
          <input type="checkbox" id="lembreDeMim" />
          Lembre-se de mim
        </label>

        <p>
          <span> Novo por aqui? </span>
          <a href="#">Assine agora</a>
        </p>

        <span>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô. <a href="#">Saiba mais.</a>
        </span>
      </div>
    </section>
  );
};

export default Login;
