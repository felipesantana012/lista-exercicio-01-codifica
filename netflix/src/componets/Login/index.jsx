import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../Botao";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext.jsx";
const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionar
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET", // Use GET para buscar usuários existentes
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Falha na autenticação");
      }

      const data = await response.json();

      // Verifique se data é um array e se contém a lista de usuários
      if (!Array.isArray(data)) {
        throw new Error("Dados de usuários inválidos");
      }

      // Verifique se a senha corresponde
      const user = data.find(
        (user) => user.email === email && user.senha === senha
      );
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      login(user.token);
      // Redireciona após o login
      navigate("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.containerLogin}>
      <h1>Entrar</h1>
      <form onSubmit={handleLogin} className={styles.inputs}>
        <div className={styles.inputs_item}>
          <input
            type="email"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.inputs_item}>
          <input
            type="password"
            id="senha"
            placeholder=""
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <Botao corFundo="#e50914" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Botao>
      </form>

      <div className={styles.outrasOpcoes}>
        <p>OU</p>
        <Botao corFundo="#393938">Usar um código de acesso</Botao>
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
          <span>Novo por aqui? </span>
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
