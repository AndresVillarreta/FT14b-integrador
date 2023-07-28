import Card from "./Card";
import styleCards from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styleCards.cardsContainer}>
      {props.characters.map((char) => {
        return (
          <Card
            key={char.id}
            onClose={() => props.onClose(char.id)}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
          />
        );
      })}
    </div>
  );
}
