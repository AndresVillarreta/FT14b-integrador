import styleCard from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styleCard.cardContainer}>
      <button onClick={props.onClose}>X</button>
      <h2 className={styleCard.name}>{props.name}</h2>
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
