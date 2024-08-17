import GenerosContainer from "../../componets/GenerosContainer";
import Slide from "../../componets/Slide";
import styles from "./homeContainer.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Slide />
      <GenerosContainer />
    </div>
  );
};

export default Home;
