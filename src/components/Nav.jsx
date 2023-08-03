import React from "react";
import SearchBar from "./searchBar/SearchBar";
import styleNav from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({
  onSearch,
  randomNumber,
  delALL,
  access,
  setAccess,
}) {
  return (
    <div className={styleNav.container}>
      <div className={styleNav.interactue}>
        <button className={styleNav.button} onClick={randomNumber}>
          Random?
        </button>
        <button onClick={delALL}>eliminar todo</button>
        <SearchBar onSearch={onSearch} />
        <div className={styleNav.navContainer}>
          <NavLink to={"/home"}>
            <button>Home</button>
          </NavLink>
          <NavLink to={"/about"}>
            <button>About</button>
          </NavLink>
          <button onClick={() => setAccess(false)}>Log Out</button>
        </div>
      </div>
    </div>
  );
}
