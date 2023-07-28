import React from "react";
import SearchBar from "./searchBar/SearchBar";
import styleNav from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={styleNav.container}>
      <h1>Rick & Morty App</h1>
      <SearchBar onSearch={onSearch} />
      <a href="http://https://soyhenry.com">
        <img
          srcSet="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg"
          alt="logo henry"
        />
      </a>

      <h3>
        Made by: <br /> Andres Villarreta
      </h3>
    </div>
  );
}
