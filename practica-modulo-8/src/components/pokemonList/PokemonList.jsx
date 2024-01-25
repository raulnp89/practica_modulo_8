import React from "react";
import { getPokemons } from "@/pages/api/pokemonFetch";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./pokemonList.module.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    let pokemonAux = getPokemons();
    setPokemon(pokemonAux);
  }, []);
  return (
    <>
      <h1 className="pokemonList">Lista de Pokemon:</h1>
      {pokemon.map((pokemon, index) => {
        return (
          <div key={index}>
            <div>
              <span>{pokemon.id} </span>
            </div>
            <div>
              <span>{pokemon.nombre} </span>
            </div>
            <button>
              <Link href={pokemon.url}> Info Adicional</Link>
            </button>
            <div>
              <button>
                <Link href={{ pathname: "PaginaDetalle" }}>Detalle</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
