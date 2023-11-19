import style from "./favorite.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Favorites = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
 
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div className={style.favoriteContainer}>
      <div>
        <select onChange={handleOrder}>
          <option value="A">ASCENDENTE</option>
          <option value="D">DESCENDENTE</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Famale">Famale</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {myFavorites.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(Favorites);
