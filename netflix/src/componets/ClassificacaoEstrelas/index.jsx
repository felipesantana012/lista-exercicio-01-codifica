import styles from "./classificacaEstrelas.module.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ClassificacaoEstrelas = (props) => {
  const numEstrelas = Math.round(props.vote_average / 2);

  const estrelaCheia = [];
  const estrelaVazia = [];

  for (let i = 0; i < 5; i++) {
    if (i < numEstrelas) {
      estrelaCheia.push(i);
    } else {
      estrelaVazia.push(i);
    }
  }

  return (
    <span className={styles.classificacaoEstrelas}>
      {estrelaCheia.map((index) => (
        <FaStar key={index} />
      ))}
      {estrelaVazia.map((index) => (
        <FaRegStar key={index} />
      ))}
    </span>
  );
};

export default ClassificacaoEstrelas;
