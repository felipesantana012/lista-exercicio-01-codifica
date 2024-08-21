import ClassificacaoEstrelas from "../ClassificacaoEstrelas";
import styles from "./cardFilme.module.css";

const CardFilme = (props) => {
  return (
    <li key={props.id} className={styles.cardFilme}>
      <div className={styles.filmePoster}>
        <img src={props.backdrop_path} alt={props.title} />
      </div>

      <div className={styles.filmeInfos}>
        <h3>{props.title}</h3>
        <ClassificacaoEstrelas vote_average={props.vote_average} />
      </div>
    </li>
  );
};

export default CardFilme;
