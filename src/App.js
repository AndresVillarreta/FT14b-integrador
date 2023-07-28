import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards";
//import characters from "./data.js";
import Nav from "./components/Nav";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    const fil = characters.find((char) => char.id == id);
    if (!fil) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        })
        .catch((error) => alert(`No existe ningun personaje con la id ${id}`));
    } else {
      alert("No se pueden duplicar los personajes buscados");
    }
  }
  const onClose = (id) => {
    const filtered = characters.filter((charID) => charID.id !== id);
    setCharacters(filtered);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
