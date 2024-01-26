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
          <div key={index} className="listaPokemon">
            <div>
              <span>{pokemon.id} </span>
              <span>{pokemon.nombre} </span>
              <button>
                <Link href={pokemon.url}> Info Adicional</Link>
              </button>
              <button>
                <Link
                  href={{
                    pathname: "PaginaDetalle",
                    query: { id: pokemon.id },
                  }}
                >
                  Detalle
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
