import React from "react";
import styleForm from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    console.log(errors);
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className={styleForm.container}>
      <div className={styleForm.loginInfo}>
        <div className={styleForm.loginBg}>
          <h1>Rick And Morty App</h1>
          <img
            srcSet="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick"
          />
        </div>
      </div>
      <div className={styleForm.loginBG}>
        <form className={styleForm.loginContainer} onSubmit={handleSubmit}>
          {errors.password && (
            <p style={{ position: "absolute", top: "290px" }}>
              {errors.password}
            </p>
          )}
          {errors.email && (
            <p style={{ position: "absolute", top: "320px" }}>{errors.email}</p>
          )}
          <h2>Login</h2>
          <label className={styleForm.email}>
            Email:
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              className={errors.email && styleForm.warning}
            />
          </label>

          <label className={styleForm.password}>
            Password:
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              className={errors.password && styleForm.warning}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
