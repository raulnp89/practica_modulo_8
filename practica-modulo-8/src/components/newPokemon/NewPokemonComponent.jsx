import React, { useEffect, useState } from "react";
import { addPokemon } from "@/pages/api/pokemonFetch";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CreatePokemon() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const urlHandler = (e) => {
    setUrl(e.target.value);
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
  };
  const weightHandler = (e) => {
    setWeight(e.target.value);
  };
  const typeHandler = (e) => {
    const arrayType = e.target.value.split(",");
    setType(arrayType);
  };

  const addPokemonClick = () => {
    addPokemon(id, name, url, height, weight, type);
    router.back();
  };

  return (
    <div className="newPokemon">
      <div>
        <span>Id</span>
        <input type="text" value={id} onChange={idHandler} />
      </div>
      <div>
        <span>Nombre</span>
        <input type="text" value={name} onChange={nameHandler} />
      </div>
      <div>
        <span>Url</span>
        <input type="text" value={url} onChange={urlHandler} />
      </div>
      <div>
        <span>Height</span>
        <input type="text" value={height} onChange={heightHandler} />
      </div>
      <div>
        <span>Weight</span>
        <input type="text" value={weight} onChange={weightHandler} />
      </div>
      <div>
        <span>Type</span>
        <input type="text" value={type} onChange={typeHandler} />
      </div>
      <div>
        <button onClick={addPokemonClick}>Crear pokemon</button>
      </div>
      <button className="home">
        <Link
          href={{
            pathname: "/",
          }}
        >
          Home
        </Link>
      </button>
    </div>
  );
}