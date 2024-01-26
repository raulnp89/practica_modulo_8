import React, { useState } from "react";
import NewPokemon from "@/components/newPokemon/NewPokemonComponent";
import Link from "next/link";

export default function PaginaDetalle(pokemonId) {
  return (
    <div className="headerDetalle">
      <Link
        href={{
          pathname: "/",
        }}
      >
        Volver al inicio
      </Link>
      <h1>Nuevo Pokemon</h1>

      <NewPokemon />
    </div>
  );
}
