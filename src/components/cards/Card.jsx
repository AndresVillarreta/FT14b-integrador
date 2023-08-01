import styleCard from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styleCard.cardContainer}>
      <button onClick={props.onClose}>X</button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styleCard.name}>{props.name}</h2>
      </Link>
      <h2 className={styleCard.status}>{props.status}</h2>
      <h2 className={styleCard.species}>{props.species}</h2>
      <h2 className={styleCard.gender}>{props.gender}</h2>
      <h2 className={styleCard.origin}>{props.origin}</h2>
      <h2>
        <img src={props.image} alt="" />
      </h2>
    </div>
  );
}
