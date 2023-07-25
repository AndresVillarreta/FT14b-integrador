export default function SearchBar(props) {
  return (
    <div>
      {console.log(props)}
      <input type="search" className="input-search" />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
}
