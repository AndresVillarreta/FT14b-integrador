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
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [access, setAccess] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const loginLocation = useLocation();
  // se crea el estado characters
  const [characters, setCharacters] = useState([]);
  //al darle click se crea una peticion a la api de rick y morty

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  async function login(userData) {
    const { email, password } = userData;
    const URL = "https://rickandmortyapispa.onrender.com/rickandmorty/login/";
    try {
      const { data, error = data.error } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      if (!error) {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  async function onSearch(id) {
    const fil = characters.some((char) => char.id === id);
    if (!fil) {
      try {
        const { data, error = data.error } = await axios(
          `https://rickandmortyapispa.onrender.com/rickandmorty/character/${id}`
        );
        if (!error && data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } catch (error) {
        if (error.message.includes("404")) {
          window.alert("¡No hay personajes con este ID!");
        } else {
          window.alert(error.message);
        }
      }
    } else {
      window.alert("¡Ya existe un personaje con esa id!");
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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
