import { modifyName } from "@/pages/api/pokemonFetch";
import React, { useState, useEffect } from "react";

export default function ChangeName({ pokemonId, toggleChangeName }) {
  const [name, setName] = useState("");
  const [confirmName, setConfirmName] = useState("");
  const [error, setError] = useState(false);

  const onChangeNameHandle = (e) => {
    setName(e.target.value);
  };
  const onChangeConfirmNameHandle = (e) => {
    setConfirmName(e.target.value);
  };
  const changeName = () => {
    if (name === confirmName) {
      modifyName(pokemonId, name);
      setError(false);
      toggleChangeName();
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <h2>Cambiar nombre del Pokemon</h2>
      <section className="formularioNew">
        <div>
          <label>Nuevo nombre</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={onChangeNameHandle}
          />
        </div>
        <br />
        <div>
          <label>Confirmar nuevo Nombre</label>
          <input
            className="input"
            type="text"
            value={confirmName}
            onChange={onChangeConfirmNameHandle}
          />
        </div>
      </section>
      <div>
        <button onClick={changeName}>Confirmar Cambios</button>
      </div>
      <br />
      {error ? (
        <div>
          <span>Error: Las contraseñas NO son iguales</span>
        </div>
      ) : null}
    </div>
  );
}