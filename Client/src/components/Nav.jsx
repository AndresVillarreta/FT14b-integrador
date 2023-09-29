import React from "react";
import SearchBar from "./searchBar/SearchBar";
import styleNav from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch, randomNumber, delALL, setAccess }) {
  return (
    <div className={styleNav.container}>
      <div className={styleNav.interactue}>
        <div className={styleNav.navContainer}>
          <NavLink to={"/home"} className={styleNav.navlink}>
            <h2>Home</h2>
          </NavLink>
          <NavLink to={"/about"} className={styleNav.navlink}>
            <h2>About</h2>
          </NavLink>
          <NavLink to={"/favorites"} className={styleNav.navlink}>
            <h2>Favorites</h2>
          </NavLink>
        </div>
        <div className={styleNav.btnContainer}>
          <button className={styleNav.button} onClick={randomNumber}>
            Random?
          </button>
          <button onClick={delALL} className={styleNav.button}>
            eliminar todo
          </button>
          <SearchBar onSearch={onSearch} />
        </div>
        <button onClick={() => setAccess(false)}>Log Out</button>
      </div>
    </div>
  );
}
