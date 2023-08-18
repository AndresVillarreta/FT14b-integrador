import styleCard from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card(props) {
  const location = useLocation();
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  };
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className={styleCard.cardContainer}>
      <div className={styleCard.btnContainer}>
        {location.pathname === "/home" ? (
          isFav ? (
            <button className={styleCard.favRed} onClick={handleFavorite}>
              🤍
            </button>
          ) : (
            <button className={styleCard.fav} onClick={handleFavorite}>
              ❤️
            </button>
          )
        ) : (
          ""
        )}

        <button onClick={props.onClose} className={styleCard.close}>
          X
        </button>
      </div>
      <NavLink to={`/detail/${props.id}`} className={styleCard.links}>
        <h2 className={styleCard.name}>{props.name}</h2>
      </NavLink>
      <h2 className={styleCard.gender}>{props.gender}</h2>
      <NavLink to={`/detail/${props.id}`}>
        <div className={styleCard.img}>
          <img src={props.image} alt="" />
        </div>
      </NavLink>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
