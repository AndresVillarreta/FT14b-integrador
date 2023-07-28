import { useState } from "react";
export default function SearchBar({ onSearch, inputValue }) {
  const [id, setId] = useState("");

  const saveID = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={inputValue}
        className="input-search"
        onChange={saveID}
        placeholder="Busca tu personaje aqui!"
      />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
