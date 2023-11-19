import PATHROUTES from "../Helpers/pathRouters";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Nav({ onSearch }) {
  const random = Math.floor(Math.random() * 825 + 1);

  return (
    <div className={styles.nav}>
      <button onClick={() => onSearch(random)} className={styles.onSearch}>
        Random
      </button>
      <SearchBar onSearch={onSearch} className={styles.SearchBar} />

      <div className={styles.links}>
        <button className={styles.button}>
          <Link className={styles.links} to={PATHROUTES.HOME}>Home</Link>
        </button>

        <button className={styles.button}>
          <Link className={styles.links} to={PATHROUTES.ABOUT}>About</Link>
        </button>

        <button className={styles.button}>
          <Link className={styles.links} to={PATHROUTES.FAVORITES}>Favorites</Link>
        </button>
      </div>
    </div>
  );
}
