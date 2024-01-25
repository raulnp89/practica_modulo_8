import React from "react";
import Link from "next/link";
import PokemonList from "../components/pokemonList/PokemonList";

import "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="title">Pokemon S.A.</h1>
      <ul className="indexList">
        <li>
          <Link href={{ pathname: "PokemonCreate" }}>Creacion de Pokemon</Link>
        </li>
        <li>
          <Link href={{ pathname: "Contact" }}>Contacto</Link>
        </li>
      </ul>

      <div>
        <PokemonList />
      </div>
    </div>
  );
}
