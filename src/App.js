import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards";
//import characters from "./data.js";
import Nav from "./components/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error.jsx";

function App() {
  // se crea el estado characters
  const [characters, setCharacters] = useState([]);
  //al darle click se crea una peticion a la api de rick y morty
  function onSearch(id) {
    const fil = characters.find((char) => char.id === parseInt(id));
    if (!fil) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            // eslint-disable-next-line
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        })
        .catch((error) => alert(`No existe ningun personaje con la id ${id}`));
    } else {
      alert("No se pueden duplicar los personajes buscados");
    }
  }
  // onclick, cierra la card, eliminandola con un filtro
  const onClose = (id) => {
    const filtered = characters.filter((charID) => charID.id !== id);
    setCharacters(filtered);
  };
  //para el boton Random, crea un numero aleatorio y lo agrega al estado characters
  const randomNumber = () => Math.floor(Math.random() * 500) + 1;
  const delALL = () => {
    setCharacters([]);
  };
  return (
    <div>
      <Nav
        onSearch={onSearch}
        randomNumber={() => onSearch(randomNumber())}
        delALL={delALL}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />{" "}
        <Route path="/:any" element={<Error />} />
        <Route path="/:any/:any" element={<Error />} />
        <Route
          path="/home"
          element={
            <div className="App">
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
