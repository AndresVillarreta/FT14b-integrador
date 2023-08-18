import React from "react";
import { connect, useDispatch } from "react-redux";
import styleFav from "./Favorites.module.css";
import { removeFavorite, filterCards, orderCards } from "../../Redux/actions";
import Card from "../cards/Card";

function Favorites(props) {
  const dispatch = useDispatch();

  const [aux, setAux] = React.useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  return (
    <div className={styleFav.container}>
      <nav className={styleFav.nav}>
        <select onChange={handleOrder}>
          <option key={2} value="A">
            Ascendente
          </option>
          <option key={3} value="D">
            Descendente
          </option>
          8
        </select>
        <select onChange={handleFilter}>
          <option key={1} value="ALL">
            Mostrar Todos
          </option>
          <option key={4} value="Male">
            Male
          </option>
          <option key={5} value="Female">
            Female
          </option>
          <option key={6} value="Genderless">
            Genderless
          </option>
          <option key={7} value="unknown">
            Unknown
          </option>
        </select>
      </nav>
      <div className={styleFav.cardsContainer}>
        {props.myFavorites?.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            gender={card.gender}
            image={card.image}
            status={card.status}
            onClose={() => dispatch(removeFavorite(card.id))}
          />
        ))}
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
