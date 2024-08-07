import styles from "./ContainerSecundario.module.css";
import { SiGoogletranslate } from "react-icons/si";

const ContainerSecundario = () => {
  return (
    <section className={styles.container}>
      <footer className={styles.footer}>
        <p>Dúvidas? Ligue 0800 591 2876</p>
        <ul className={styles.links}>
          <li>
            <a href="#">Perguntas frequentes</a>
          </li>
          <li>
            <a href="#">Central de Ajuda</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Preferências de cookies</a>
          </li>
          <li>
            <a href="#">Informações corporativas</a>
          </li>
        </ul>

        <div></div>
        <select name="" id="" className={styles.select}>
          <option value=""> Portugues</option>
          <option value=""> Ingles</option>
        </select>
      </footer>
    </section>
  );
};

export default ContainerSecundario;
