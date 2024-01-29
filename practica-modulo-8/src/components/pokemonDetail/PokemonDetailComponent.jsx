import { getPokemonById } from "@/pages/api/pokemonFetch";
import { useState, useEffect } from "react";
import React from "react";

export function PokemonDetail({ pokemonId }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonAux = await getPokemonById(pokemonId);

        if (pokemonAux) {
          setPokemon(pokemonAux);
        } else {
          console.error(`No se encontró el Pokémon con id ${pokemonId}`);
        }
      } catch (error) {
        console.error("Error al obtener detalles del Pokémon", error);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  return (
    <div className="pokemonDetail">
      <h1>{pokemon.name}</h1>
      <span>Id: {pokemon.id} </span>
      <span>
        Peso: {pokemon.details ? pokemon.details.weight : "Cargando..."}
      </span>
      <span>
        Altura: {pokemon.details ? pokemon.details.height : "Cargando..."}
      </span>
      <span>
        Type:{" "}
        {pokemon.details ? pokemon.details.type.join(", ") : "Cargando..."}
      </span>
      <img
        className="pokemonImg"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      ></img>
    </div>
  );
}
