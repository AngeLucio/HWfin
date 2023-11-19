/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Card = (props) => {
  const {
    id,
    name,
    species,
    gender,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.btnRed}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.btnWhite}>
          🤍
        </button>
      )}
      <div className={styles.butonOnCloseContainer}>

        {location.pathname !== "/favorites" && <button className={styles.onClose} onClick={() => onClose(id)}  >X</button>}
      
      </div>
      <Link to={`/Detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2 className={styles.h2}>{species}</h2>
      <h2 className={styles.h2}>{gender}</h2>
      <h2 className={styles.h2}>{origin.name}</h2>
      <img src={image} alt="" className={styles.img} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Card);
