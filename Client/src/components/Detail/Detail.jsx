import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import styleDetail from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const usnav = useNavigate();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => usnav("/error"));
    return setCharacter({});
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className={styleDetail.container}>
      <div className={styleDetail.cardContainer}>
        <div className={styleDetail.info}>
          <NavLink className={styleDetail.link} onClick={() => usnav(-1)}>
            <button>Back</button>
          </NavLink>
          <h2>Name: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Specie: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
        </div>
        <div className={styleDetail.imgContainer}>
          <img srcSet={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
}
