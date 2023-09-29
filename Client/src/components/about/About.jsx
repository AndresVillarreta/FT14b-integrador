import React from "react";
import styleAbout from "./About.module.css";
import image from "../../assets/selfie.png";
export default function About() {
  return (
    <div className={styleAbout.container}>
      <div className={styleAbout.infoContainer}>
        <div className={styleAbout.imgText}>
          <img srcSet={image} alt="img" />
          <div className={styleAbout.info}>
            <h1>
              Andres Villarreta <br /> Training to Full Stack Developer
            </h1>
            <p>
              Hola! Mi nombre es Andres Villarreta, tengo 19 años, soy de
              Venezuela, me encuentro cursando esta maravillosa carrera en
              Henry. Empece aproximadamente en Mayo de 2023, me apasiona el
              desarollo de sitios web, tanto front-end como back-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
