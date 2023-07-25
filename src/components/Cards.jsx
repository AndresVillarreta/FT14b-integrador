import Card from "./Card";

export default function Cards(props) {
  return (
    <div>
      {props.characters.map((char) => {
        return (
          <Card
            onClose={() => window.alert("Emulamos que se cierra la card")}
            key={char.id}
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
