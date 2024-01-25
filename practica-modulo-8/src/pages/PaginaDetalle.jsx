import { PokemonDetail } from "@/components/pokemonDetail/PokemonDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { getPokemons } from "@/pages/api/pokemonFetch";

export default function PaginaDetalle() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    let pokemonAux = getPokemons();
    setPokemon(pokemonAux);
  }, []);
  return (
    <div className="headerDetalle">
      <h1>Detalle del Pokemon</h1>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Volver al inicio
      </Link>
      <div>
        <span>{pokemon.nombre} </span>
      </div>
    </div>
  );
}
