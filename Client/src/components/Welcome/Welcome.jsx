import styleWelcome from "./Welcome.module.css";
export default function Welcome() {
  return (
    <div className={styleWelcome.cont}>
      <h1>Welcome!</h1>
      <h2>Esta es mi Rick And Morty App!!</h2>
      <h3>Prueba buscar una id, o diviertete con el RANDOM!!</h3>
    </div>
  );
}
