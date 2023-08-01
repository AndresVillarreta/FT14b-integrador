import React from "react";
import styleAbout from "./About.module.css";

export default function About() {
  const image = {
    img: "https://scontent.fbrm1-1.fna.fbcdn.net/v/t39.30808-6/344821889_1299146724030986_4220050820558651592_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bzbpoJjZxdAAX9wV8K8&_nc_ht=scontent.fbrm1-1.fna&oh=00_AfBx5VcgV16pReNoXR8y7bADigfxkIW1CsqSmXb44M1rCQ&oe=64CC53B6",
  };
  return (
    <div className={styleAbout.container}>
      <div className={styleAbout.infoContainer}>
        <div className={styleAbout.imgText}>
          <img srcSet={image.img} />
          <div className={styleAbout.info}>
            <h1>
              {" "}
              Andres Villarreta <br /> Training to Full Stack Developer
            </h1>
            <p>
              Hola! Mi nombre es Andres Villarreta, tengo 19 años, soy de
              Venezuela, me encuentro cursando esta maravillosa carrera en
              Henry. Empece aproximadamente en Mayo de 2023, actualmente me
              encuentro cursando el Modulo 02 de este curso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
