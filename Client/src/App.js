import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards";
//import characters from "./data.js";
import Nav from "./components/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const EMAIL = "admin@admin.com";

  const PASSWORD = "12345678";

  const loginLocation = useLocation();
  // se crea el estado characters
  const [characters, setCharacters] = useState([]);
  //al darle click se crea una peticion a la api de rick y morty

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  function onSearch(id) {
    const fil = characters.find((char) => char.id === parseInt(id));
    if (!fil) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
      {loginLocation.pathname === "/" ? (
        ""
      ) : (
        <Nav
          onSearch={onSearch}
          randomNumber={() => onSearch(randomNumber())}
          delALL={delALL}
          access={access}
          setAccess={setAccess}
        />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/:any" element={<Error />} />
        <Route path="/:any/:any" element={<Error />} />
        <Route
          path="/home"
          element={
            <div className="App">
              <Cards characters={characters} onClose={onClose} />
              {characters.length === 0 ? <Welcome /> : ""}
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
