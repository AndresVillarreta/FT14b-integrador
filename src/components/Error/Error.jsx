import React from "react";
import styleError from "./styleError.module.css";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className={styleError.container}>
      <div className={styleError.textContainer}>
        <h1>UPS!! ERROR 404</h1>
        <h2>
          Parece que la pagina que intentas acceder no existe, intenta buscar
          otro link :D
        </h2>
        <NavLink to={"/home"}>
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  );
}
